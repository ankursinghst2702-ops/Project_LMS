const mongoose= require("mongoose")

async function connectToDB(){
    try{
        const conn= mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connection")
    }catch(err){
        console.log(err)
    }
}

module.exports= connectToDB