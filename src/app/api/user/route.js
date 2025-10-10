import { NextResponse } from "next/server";
import createUser from '../../../lib/db/methods/createUser';
import updateUser from '../../../lib/db/methods/updateUser';
import checkUser from '../../../lib/db/methods/checkUser';
import { getToken } from "next-auth/jwt";

export async function POST(req){
    const params= await req.json();
    console.log("user created: ",params);
    
    try {
        const res= await createUser(params);
        return NextResponse.json({data: res});
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"error", errMsg: error});
    }
}

export async function PUT(req){
    const params= await req.json();
    console.log("PUT request: ",params);
    const {email} = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const userResponse= await checkUser(email);

    console.log(userResponse);

    if(!userResponse.success) return NextResponse.json({msg: "Invalid User", success: false})

    try {
        const res= await updateUser(params);
        return NextResponse.json({data:res});
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"error",errMsg: error});
    }
}