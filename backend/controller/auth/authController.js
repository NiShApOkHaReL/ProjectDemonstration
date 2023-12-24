
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../model/userModel")
const sendEmail = require("../../services/sendEmail")


exports.registerUser = async(req,res) =>{
    const {email, password, name, cno, phonenumber, address} = req.body
    console.log(email)
    if(!email || !password || !name || !cno || !phonenumber || !address){
        return res.status(400).json({
            message : "Please provide all the details"
        })
    }
    const userExist = await User.find({userEmail : email})
    if(userExist.length > 0){
        return res.status(400).json({
            message : "User with that email already register"
        }) 
    }
    console.log(password)
    await User.create({
        userName : name,
        userEmail : email,
        citizenshipNumber : cno,
        userAddress : address,
        userPhoneNumber : phonenumber,
        userPassword : bcrypt.hashSync(password,10)
    })
    res.status(200).json({
        message : "user registered successfully"
    })
}


exports.loginUser = async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({
            message:"Enter all the details"
        })
    }
    const userFound = await User.find({userEmail:email})
    if (userFound.length == 0){
        return res.status(400).json({
            message:"User with that email is not registered"
        })
    }
    //password check
    const isMatched = bcrypt.compareSync(password, userFound[0].userPassword)
    if(isMatched){
        //generate token
        const token = jwt.sign({id:userFound[0]._id},process.env.SECRETKEY,{expiresIn:'30d'})


        return res.status(201).json({
            message: "User logged in successfully",
            data: token
        })
    }
    else{
        res.status(400).json({
            message: "Invalid email or password"
        })
    }

}

//forgot password
exports.forgotPassword = async(req,res)=>{
    const {email} = req.body
    
    if(!email){
        return res.status(400).json({
            message:"Please provide the email details"
        })
    }

    //check if user email exists
    userExist = await User.find({userEmail: email})
    
    if(userExist.length == 0){
        return res.status(400).json({
            message: "No such email is registered"
        })
    }

    //send OTP to email
    const otp = Math.floor(1000 + Math.random()*9000)

    userExist[0].otp = otp
    await userExist[0].save()
    await sendEmail({
        email : email,
        subject : "Password Reset",
        message : "Your otp is "+`${otp}`
    })
    res.status(200).json({
        message: "Email sent successfully"
    })
    
}

// verify opt
 
exports.verifyOtp = async(req,res) =>{
 
    const {email,otp} = req.body
    if(!email || !otp){
        return res.status(400).json({
            message : "Please provide email, otp"
        })
    }
 
    // check if that otp is correct or not of that email
    const userExist = await User.find({userEmail : email})
    if(userExist.length == 0){
        return res.status(404).json({
            message : "Email is not registered"
        })
    }
 
    if(userExist[0].otp != otp){
        res.status(400).json({
            message : "Invalid otp"
        })
    }else{
            // dispose the otp so that it cannot be used next time the same otp
        userExist[0].otp = undefined
        userExist[0].isOtpVerified = true
        await userExist[0].save()
        res.status(200).json({
            message : "Otp is correct"
        })
    }
}
//reset password
exports.resetPassword = async(req,res)=>{
     const {email, newPassword, confirmPassword} = req.body
     if(!email || !newPassword || !confirmPassword)
     {
        return res.status(400).json({
            message: "Enter all the details: email, new pw and confirm pw"
        })
     }
     userExist =await User.find({userEmail: email})
     if (userExist.length == 0){
        return res.status(400).json({
            message : "No user with such email found."
        })
     }

     if(userExist[0].isOtpVerified !== true){
        return res.status(400).json({
            message: "You cannot perform this action."
        })
     }



     if(newPassword !== confirmPassword){
        return res.status(400).json({
            message : "New Password and Confirm Password doesnot match"
        })
     }
     userExist[0].userPassword = bcrypt.hashSync(newPassword,10)
     userExist[0].isOtpVerified = false
     await userExist[0].save()

     res.status(200).json({
        message: "Password changed successfully"
     })

}

