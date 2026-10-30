const mongoose= require("mongoose")

const lessonSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    course:{
        type:String,
        required:[true,"course is required"]
    },
    type:{
        type:String,
        required:[true,"type is required"]
    },
    content:{
        type:String
    },
    videoUrl:{
        type:String
    },
    assignmentInstruction:{
        type:String
    },
    totalMarks:{
        type:Number,
        required:[true,"title is required"]
    },
    order:{
        type:Number,
        required:[true,"title is required"]
    }
})

const lessonModel= mongoose.model("Lesson", lessonSchema)

module.exports= lessonModel