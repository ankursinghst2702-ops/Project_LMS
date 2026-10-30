const User= require("../model/User")

const getProfile=(req,res)=>{
    const user=User.findById(req.user.id)
    res.status(200).json({
        message:"Welcome to your Profile",
        user:{id:user.id,name:user.name,email:user.email,role:user.role}
    })
}

const getAllUsers= async(req,res)=>{
    const users=await User.find()
    return res.status(200).json({
        message:"All Users(admit only)",
        users:users
    }) 
}

module.exports= {getProfile,getAllUsers}