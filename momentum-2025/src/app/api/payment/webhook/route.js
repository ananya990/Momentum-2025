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
        console.log("Hello from webhook for razorpay!");

        const reqBody = JSON.stringify(req.body) || "XXX";
        const signature = req.headers["x-razorpay-signature"] || "XXX";
        const secret= process.env.RPAY_SECRET;
        const expectedSignature = crypto.createHmac("sha256", secret).update(reqBody).digest("hex");

        console.log(reqBody, signature, secret, expectedSignature)

        if (expectedSignature == signature) {
            const orderId = JSON.parse(reqBody).payload.order.entity.id;
            const orderStatus = JSON.parse(reqBody).payload.order.entity.status;
            if (orderStatus == "paid") {
                const order = await updatePaymentByOrderId(orderId);
                console.log(order);
            }
        }
        else return NextResponse.json({"msg":"unverified"},{status: 500})

        return NextResponse.json({msg:"success!"},{status: 200})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error"},{status: 500})
    }
}

