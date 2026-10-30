const web= require("./src/web")
const connectToDB= require("./src/db/db")
const dotenv= require("dotenv").config()

connectToDB()
web.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`)
})