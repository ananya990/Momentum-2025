const mongoose = require('mongoose');

const teamsModel= mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true
        },
        teamName: {
            type: String,
            required: true
        },
        teamMembers:[
            {
                type: Object
            }
        ],
        status: {
            type: String,
            required: true,
            default: "created"
        },
        orderId: {
            type: String,
            required: true
        }
    }
)

const Team= mongoose.models.Teams || mongoose.model("Teams",teamsModel)
module.exports= Team;