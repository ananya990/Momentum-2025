import { NextResponse } from "next/server";


export async function POST(req){
    try {

        const bodyReq = JSON.parse(req.body);
        const eventId = bodyReq.eventId;

        if (isNaN(eventId))
        return res.status(400).json({ error: "Invalid eventId" });

        const event = await getEventById(eventId);
        if (event == null) return res.status(400).json({ error: "Event does not exist" });

        // const order = await DB.getOrCreateOrder(user.userId, eventId.toString());
        if (order == null) return res.status(400).json({ error: "Payment gateway error" });
        
        // return res.status(200).json(order);
        
        return NextResponse.json({data: "working fine!"});
    } catch (error) {
        return NextResponse.json({msg:"error",errMsg: error});
    }
}