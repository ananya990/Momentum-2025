import {NextResponse} from 'next/server';
import crypto from 'crypto';
import sendEmail from '../../../../lib/mail';
import dbConnect from '@/lib/db/methods/mongodb';
import Payment from '../../../../mongo/models/Payment'
import Team from '@/mongo/models/Team';
import Users from '@/mongo/models/User';
import newUserTicket from "../../../../lib/db/methods/newUserTicket"
import events from "../../../../data/events.json"
import checkUser from '../../../../lib/db/methods/checkUser';
import { getToken } from "next-auth/jwt";

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
        const body= await req.json();
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature,}= body;
        const {email} = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

        const userResponse= await checkUser(email);
        console.log(userResponse);

        if(!userResponse.success) return NextResponse.json({msg: "Invalid User", success: false})

        const pmntString= razorpay_order_id +"|" +razorpay_payment_id;
        const secret= process.env.RPAY_SECRET;

        const expectedSignature= crypto.createHmac('sha256', secret).update(pmntString.toString()).digest("hex");

        console.log("Expected Signature: ", expectedSignature);
        console.log("Received Signature: ", razorpay_signature);

        // await sendEmail(email, fname, waLink, eventName);

        if(expectedSignature===razorpay_signature) {
            // await addPayment(body);
            console.log("API/VERIFY: ", razorpay_order_id);
            const orderId= razorpay_order_id;

            await updatePaymentByOrderId(orderId);

            return NextResponse.json({msg:"verified"},{status: 200})
        }
        else return NextResponse.json({"msg":"unverified"},{status: 500})

        // return NextResponse.json({msg:"verified"},{status: 200})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error"},{status: 500})
    }
}

