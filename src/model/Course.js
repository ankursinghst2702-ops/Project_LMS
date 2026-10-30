const mongoose= require("mongoose")

const courseSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    instructor:{
        type:String,
        required:[true,"instructor is required"]
    },
    status:{
        type:String,
        required:[true,"status is required"]
    }
})

const courseModel= mongoose.model("course",courseSchema)

module.exports= courseModel