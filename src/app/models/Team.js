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
                type: Object,
                ref: mongoose.Model.User
            }
        ],
    }
)

const Team= mongoose.models.Team || mongoose.model("Team",teamsModel)
module.exports= Team;