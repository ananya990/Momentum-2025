import dbConnect from "./mongodb";
import User from '../../../mongo/models/User';
import Team from '../../../mongo/models/Team';
import Payment from '../../../mongo/models/Payment';
export default async function getOverview(){
    try{
        await dbConnect();

        const users= await User.find({});
        const payments= await Payment.find({});
        const teams= await Team.find({});

        let totalAmount=0;

        const finalPayment=[];
        for (const p of payments) {
            if(p.status=="captured") {
                totalAmount+=(p.amount/100);
                finalPayment.push(p);
            }
        }

        return {
            users: users.length,
            payments: finalPayment.length,
            teams: teams.length,
            amount: totalAmount
        };
    }
    catch(error){
        console.log(error);
        return "Unable to fetch registrations";
    }
}