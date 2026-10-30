const express= require("express")
const {protect, authorize}= require("../middleware/auth.middleware")
const {getProfile, getAllUsers}= require("../controller/user.contoller")
const router =express.Router()

router.get("/profile",protect,getProfile)
router.get("/",protect,authorize("Admin"),getAllUsers)

module.exports=router
