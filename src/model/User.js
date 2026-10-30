const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:[true,"Id is required"]
    },
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    role:{
        type:String
    }
})

const userModel= mongoose.model("user",userSchema)

module.exports= userModel