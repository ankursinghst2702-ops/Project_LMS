const jwt= require("jsonwebtoken")
const protect=(req,res,next)=>{
    const authHeader=req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(400).json({
            message:"No Token, Try Again"
        })
    }

    const token=authHeader.split(" ")[1]
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user= decoded
        next()
    }catch(err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}

const authorize=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(allowedRoles.includes(req.user.role)){
            return res.status(403).json({
            message:"Access Denied: You are not Allowed"
            })
        }
    }
}

module.exports= {protect, authorize}