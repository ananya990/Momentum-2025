import { NextResponse } from 'next/server';
import getAllTeams from '../../../../lib/db/methods/getAllTeams';

export async function POST(){
    try{
        const teams= await getAllTeams();
        const finalTeams=[];
        for (const team of teams) {
            finalTeams.push({
                _id: team._id+"",
                eventName: team.eventName+"",
                teamName: team.teamName+"",
                status: team.status+"",
                orderId: team.orderId+""
            })
        }
        return NextResponse.json({teams: finalTeams},{status: 200});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({msg:"Unable to fetch records!"},{status: 500});
    }
}