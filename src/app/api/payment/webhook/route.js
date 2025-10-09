import {NextResponse} from 'next/server';
import crypto from 'crypto';
import sendEmail from '../../../../lib/mail';
import dbConnect from '@/lib/db/methods/mongodb';
import Payment from '../../../../mongo/models/Payment'
import Team from '@/mongo/models/Team';
import Users from '@/mongo/models/User';
import newUserTicket from "../../../../lib/db/methods/newUserTicket"
import events from "../../../../data/events.json"

async function updatePaymentByOrderId(orderId) {
    try {
        await dbConnect();

        const updatedPayment= await Payment.findOneAndUpdate({orderId: orderId},{status: "paid"})

        console.log(updatedPayment);

        await dbConnect();

        const updatedTeam= await Team.findOneAndUpdate(
            {
                orderId: orderId
            },
            {
                status: "verified"
            }
        )

        console.log(updatedTeam);

        // get event & user data
        await dbConnect();
        const user= await Users.findById(updatedPayment.userId);
        const eventId= updatedPayment.eventId;

        // Add event id to user's schema
        await dbConnect();
        await newUserTicket(user.email, eventId);

        // Send ticket mail
        await sendEmail(user.email, user.fname, events[eventId].waLink, events[eventId].name);

        return "Payment Updated";
    } catch (error) {
        console.log(error);
        return "error";
    }   
}

export async function POST(req){
    try {
        console.log("Webhook hit: Razorpay");

        // get raw body
        const rawBody = await req.text();
        // const body = await req.json();
        // console.log("JSON body: ", body);
        console.log("Raw Body: ", rawBody);
        console.log("Headers: ",req.headers);

        // get headers
        const signature = req.headers.get("x-razorpay-signature");
        const secret = process.env.RPAY_SECRET;

        // verify signature
        const expectedSignature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

        console.log("Expected:", expectedSignature);
        console.log("Received:", signature);

        if (expectedSignature !== signature) {
            console.warn("⚠️ Invalid signature");
            return NextResponse.json({ msg: "unverified" }, { status: 400 });
        }

        // parse JSON after verification
        const parsedBody = JSON.parse(rawBody);
        const orderId = parsedBody.payload?.order?.entity?.id;
        const orderStatus = parsedBody.payload?.order?.entity?.status;

        console.log("parsedBody: ",parsedBody);
        console.log("orderId: ",orderId);
        console.log("orderStatus: ",orderStatus);

        if (orderStatus === "paid") {
            const result = await updatePaymentByOrderId(orderId);
            console.log(result);
        }

        return NextResponse.json({ msg: "success!" }, { status: 200 });
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error"},{status: 500})
    }
}

