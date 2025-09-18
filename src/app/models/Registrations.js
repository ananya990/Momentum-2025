
const mongoose = require('mongoose');
import User from './User';

const registrationModel= mongoose.Schema(
    {
        status: {
            type: String,
            isRequired: true,
            default: "failed"
        },
        eventName: {
            type: String,
        },
        amount: {
            type: Number
        },
        currency: {
            type: String,
            default: "INR"
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
        }
    }
)

const Registrations= mongoose.models.Registrations || mongoose.model("Registrations", registrationModel);
module.exports= Registrations;