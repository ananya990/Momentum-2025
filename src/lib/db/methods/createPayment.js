import dbConnect from "./mongodb";
import Payment from '../../../mongo/models/Payment';
import Team from '../../../mongo/models/Team';
import Users from '../../../mongo/models/User';
import events from '../../../data/events.json'


export default async function createPayment({eventId, orderId, amount, teamName, email, referral, type, teamMembers, }) {
    try {
        await dbConnect();

        // get User Data
        const {_id, tag}= await Users.findOne({email: email});
        console.log("User from : ", _id, tag);

        await dbConnect();

        // Step 1: Add payment to payments schema
        const newPayment= new Payment({
            status: "created",
            eventName: events[eventId].name,
            amount: amount,
            team_name: teamName,
            userId: _id,
            userTag: tag,
            referral: referral,
            orderId: orderId,
            eventId: eventId
        })

        await newPayment.save();


        console.log(newPayment);

        // Step 2: If its a team then store it in team's schema
        if(type!=="Solo"){
            await dbConnect();
            const team= new Team({
                eventName: events[eventId].name,
                teamName: teamName,
                teamMembers: teamMembers,
                orderId: orderId,
                status: "created"
            })

            await team.save();

            console.log(team);
        }

        return "success";
    } catch (error) {
        console.log(error);
        return "error";
    }
}