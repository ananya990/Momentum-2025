import {NextRequest, NextResponse} from 'next/server';
import Razorpay from 'razorpay'
import shortid from 'shortid';
import events from '@/data/events.json'
import createPayment from '../../../../lib/db/methods/createPayment';
import { getToken } from 'next-auth/jwt';
import Payment from '../../../../mongo/models/Payment';
import Users from '../../../../mongo/models/User';

export async function POST(req){
    try {
        // console.log("Razorpay: ");
        // console.log(process.env.NEXT_PUBLIC_RPAY_KEY, process.env.RPAY_SECRET)
        
        // Data
        const body= await req.json();
        const {eventId, teamName, teamMembers, referral}= body;
        const {email} = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

        console.log(eventId, teamName, teamMembers, referral);

        // check for existing order id
        const {_id}= await Users.findOne({email: email});
        let payment= await Payment.findOne({userId: _id, eventName: events[eventId].name})

        // if order id exist send that
        if(payment){
            const referralUpdated= await Payment.findOneAndUpdate(
                {
                    userId: _id, eventName: events[eventId].name
                },
                {
                    referral: referral
                }
            )
            console.log("Referral: ", referralUpdated);
            console.log({orderId: payment.orderId, amount: payment.amount, currency: "INR"});
            return NextResponse.json({orderId: payment.orderId, amount: payment.amount, currency: "INR"},{status: 200})
        }

        //  New order ID logic

        // Validation
        if(!eventId) return NextResponse.json({msg: "Required fields are missing."});
        if(eventId<0 || eventId>=events.length) return NextResponse.json({msg: "Field range out of bound!"});

        // initialize razorpay
        const razorpay= new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RPAY_KEY,
            key_secret: process.env.RPAY_SECRET
        })

        // created new order id
        const order= await razorpay.orders.create({
            amount: events[eventId].fee*100,
            currency: "INR",
            receipt: shortid.generate()
        })
        console.log(order);

        // create new entry of payment
        await createPayment({
            orderId: order.id, 
            amount: order.amount,
            teamName: teamName, 
            email,
            referral: referral, 
            type: events[eventId].type, 
            teamMembers: teamMembers,
            eventId
        });
        
        return NextResponse.json({orderId: order.id, amount: order.amount, currency: order.currency},{status: 200})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error creating order. :)"},{status: 500})
    }
}


// new data & rule book
// ui improvements & overall work
// see for user tag
// validations - 
// webhook - done