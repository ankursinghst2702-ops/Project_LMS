const mongoose= require("mongoose")

const enrollmentSchema= new mongoose.Schema({
    student:{
        type:String,
        required:[true,"student is required"]
    },
    course:{
        type:String,
        required:[true,"course is required"]
    },
    enrolledAt:{
        type:String,
        required:[true,"enrollerAt is required"]
    },
    status:{
        type:String,
        required:[true,"status is required"]
    }
})

const enrollmentModel= mongoose.model("enrollment", enrollmentSchema)

module.exports= enrollmentModel