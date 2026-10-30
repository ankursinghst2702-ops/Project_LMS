const express= require("express")
const router= require("../src/routes/auth.routes")
const web= express()
const userRouter= require("../src/routes/user.routes")

web.use(express.json())
web.use("/api/auth",router)
web.use("/api",userRouter)

web.get("/",(req,res) =>{
    res.send("Welcome to LearnBCA")
})
module.exports= web
