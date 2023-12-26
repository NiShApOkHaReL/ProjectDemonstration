const jwt = require("jsonwebtoken")
const {promisify} = require("util")
const User = require("../model/userModel")


const isAuthenticated = async (req,res,next)=>{
    const token = req.headers.authorization
    const userToken = token.split(" ")[1]
    console.log(token)
    if(userToken == "Bearer null"){
      console.log("HEllo")
      next();
    }
    else{
      console.log(userToken)
      try {
        const decoded = await jwt.verify(userToken,process.env.SECRETKEY)
        const doesUserExist =  await User.findOne({_id : decoded.id})
    


       if(!doesUserExist){
        return res.status(404).json({
            message : "User doesn't exists with that token/id"
        })
       }
       req.user  = doesUserExist
    
       next()
       
      } catch (error) {
        res.status(500).json({
            message : error.message
        })
      }
    }
    
  
    // check if decoded.id(userId) exists in the user table 

  

}

module.exports = isAuthenticated