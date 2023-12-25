const mongoose = require("mongoose")
const adminSeeder = require("../adminSeeder")


exports.connectDatabase = async(URI)=>{
    // console.log("Hello")
    await mongoose.connect(URI)
    console.log("Database connected successfully")
}

adminSeeder()