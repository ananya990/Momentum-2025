import { NextResponse } from "next/server";


export function GET(){
    try {
        return NextResponse.json({data: "working fine!"});
    } catch (error) {
        return NextResponse.json({msg:"error",errMsg: error});
    }
}