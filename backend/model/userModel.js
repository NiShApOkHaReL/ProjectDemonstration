const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    userEmail:{
        type: String,
        required : [true, "Email must be provided"],
        unique : true,
        lowercase : true
    },
    userPhoneNumber :{
        type : Number,
        require : [true , "Phone Number must be provided"],
    },
    userName : {
        type : String,
        required: [true, "UserName must be provided"]
    },
    userPassword: {
         type: String,
         required : [true, "Password must be provided"]
    },
    citizenshipNumber:{
        type: String,
        required : [true, "Cno. must be provided"]

    },
    userAddress: {
        type: String,
        required: [true, "Adress must be provided"]
    },
    Role:{
        type: String,
        enum: ['admin','user'],
        default: 'user'
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports = User