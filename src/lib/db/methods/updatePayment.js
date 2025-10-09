import dbConnect from "./mongodb";
import Payment from '../../../mongo/models/Payment';
import Team from '../../../mongo/models/Team';
import newUserTicket from "./newUserTicket";
import Users from "../../../mongo/models/User";
import events from "../../../data/events.json"
import sendEmail from "@/lib/mail";


export default async function updatePayment({orderId}){
    console.log(Payment)
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