import { NextResponse } from "next/server";


export function POST(){
    try {
        return NextResponse.json({data: "working fine!"});
    } catch (error) {
        return NextResponse.json({msg:"error",errMsg: error});
    }
}

export function PUT(){
    try {
        return NextResponse.json({data: "working fine!"});
    } catch (error) {
        return NextResponse.json({msg:"error",errMsg: error});
    }
}