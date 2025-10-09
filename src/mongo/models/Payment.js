
const mongoose = require('mongoose');
import User, { events } from './User';

const paymentModel= mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            default: "INR",
            immutable: true
        },
        referral: {
            type: String,
            default: "none"
        },
        createdAt:{
            type: Date,
            default: Date.now()
        },
        team_name: {
            type: String,
            default: "Individual"
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },
        userTag: {
            type: String
        },
        orderId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        eventId:{
            type: Number,
            required: true
        }
    }
)

const Payment= mongoose.models.Payments || mongoose.model("Payments", paymentModel);
module.exports= Payment;

// export { };
