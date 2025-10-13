import { NextResponse } from 'next/server';
import getAllPayment from '../../../../lib/db/methods/getAllPayment';

export async function POST(){
    try{
        const payments= await getAllPayment();
        return NextResponse.json({allPayments: payments},{status: 200});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({msg:"Unable to fetch records!"},{status: 500});
    }
}