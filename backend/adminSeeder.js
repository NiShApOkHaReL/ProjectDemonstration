
const bcrypt = require("bcryptjs")
const User = require("./model/userModel")

const adminSeeder = async()=>{
     // admin seeding

 // check whether admin exists or not
 const isAdminExists = await User.findOne({userEmail : "admin@gmail.com"})
 
 if(!isAdminExists){
    await User.create({
      userName : "Admin",
      userEmail : "admin@gmail.com",
      citizenshipNumber : 1234567,
      userAddress : "Ratnanagar-8, Chitrasari",
      userPhoneNumber : 9842605360,
      userPassword : bcrypt.hashSync("admin",10),
      Role: "admin"
    
     })
    
     console.log("Admin seeded successfully")
 }else{
    console.log("Admin already seeded")
 }

}

module.exports = adminSeeder