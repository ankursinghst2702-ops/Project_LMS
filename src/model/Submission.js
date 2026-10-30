const mongoose= require("mongoose")

const submissionSchema= new mongoose.Schema({
    student:{
        type:String,
        required:[true,"student is required"]
    },
    lesson:{
        type:String,
        required:[true,"lesson is required"]
    },
    answerText:{
        type:String
    },
    fileUrl:{
        type:String
    },
    marksObtained:{
        type:Number
    },
    feedback:{
        type:String
    },
    status:{
        type:String,
        required:[true,"student is required"]
    }
})

const submissionModel= mongoose.model("submission", submissionSchema)

module.exports= submissionModel