const User= require("../model/User")
const bcrypt=require("bcryptjs")
const jwt= require("jsonwebtoken")

exports.register= async(req,res)=>{
    const{id,name,email,password,role}= req.body

    if(!id || !name || !email || !password){
        return res.status(400).json({
            message:"id,name, email & password is required"
        })
    }

    const emailExist= await User.findOne({
        email:email
    })
    if(emailExist){
        return res.status(401).json({
            message:"Email is already register"
        })
    }

    const hashedPassword= await bcrypt.hash(password,10)
    const user= await User.create({id,name,email,password:hashedPassword,role})

    return res.status(201).json({
        message:"User register"
    })
}

exports.login= async(req,res)=>{
    const{email,password}= req.body

    if(!email || !password){
        return res.status(409).json({
            message:"email  & password is required"
        })
    }
    const user =await User.findOne({email})
    if(!user){
        return res.status(401).json({
            message:"email not register"
        })
    }
    
    const checkPassword= await bcrypt.compare(password,user.password)
    if(!checkPassword){
        return res.status(401).json({
            message:"password is invalid"
        })
    }

    const token = jwt.sign({
        id:user.id,
        role:user.role
    },
    process.env.JWT_SECRET_KEY,
    {expiresIn:'4d'})

    return res.json({
        message:"logged in",
        token
    })
}