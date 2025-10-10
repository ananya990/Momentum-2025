import Users from "../../../mongo/models/User";
import dbConnect from "./mongodb";


export default async function checkUser(email) {
    try {
        await dbConnect();

        const user= await Users.findOne({email: email});

        if(!user) return {msg: "No User Found", success: false}

        return {msg: "User Found", success: true}
    } catch (error) {
        console.log(error);
        return {msg: error.message, success: false}
    }
}