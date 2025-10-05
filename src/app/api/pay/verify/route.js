import { NextResponse } from "next/server";
import crypto from "crypto";


export function POST(){
    try {
        if (user == null) return res.status(401).json({ error: "unauthorised" });
            const bodyReq = JSON.parse(req.body);

            const razorpay_payment_id = bodyReq.razorpay_payment_id || "XXX";
            const razorpay_order_id = bodyReq.razorpay_order_id || "XXX";
            const razorpay_signature = bodyReq.razorpay_signature || "XXX";

            const secret = process.env.RPAY_SECRET;
            const shasum = crypto.createHmac("sha256", secret);

            shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);

            const digest = shasum.digest("hex");

            if (razorpay_signature == digest) {
                //   const order = await DB.setOrderPaid(razorpay_order_id, "user");

                res.status(200).json(order);
            } 
        else {
            return res.status(401).json({ error: "Verification Failed" });
        }

        return NextResponse.json({data: "working fine!"});
    } catch (error) {
        return NextResponse.json({msg:"error",errMsg: error});
    }
}