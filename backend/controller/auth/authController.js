
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../model/userModel")


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