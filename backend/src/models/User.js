import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
        
    },
    profilePicture:{
        type:String,
       
    },
    isVerified:{
        type:Boolean,
        required:true
    }
},
{
    timestamps:true,
});

export const User = mongoose.model("User",userSchema);
