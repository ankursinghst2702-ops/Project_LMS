const express= require("express")
const {register}= require("../controller/auth.controller")
const {login}= require("../controller/auth.controller")
const router= express.Router()

router.post("/register",register)
router.post("/login",login)

module.exports= router
