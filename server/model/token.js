import mongoose from "mongoose";
import mangoose from "mongoose";

const tokenSchema = mangoose.Schema({
    token:{
        type:String,
        required: true
    }
})
const token = mongoose.model('token', tokenSchema);
export default token;