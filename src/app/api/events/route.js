import { NextResponse } from "next/server";
import events from "../../../data/events.json"


export function GET(){
    try {
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({msg:"error",errMsg: error});
    }
}   