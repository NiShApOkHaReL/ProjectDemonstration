const mongoose = require("mongoose")
const Schema = mongoose.Schema
 
const reportsSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required : [true, "Report must belong to a user"]
 
    },
    emergencyStatus:{
        type: String,
        required : [true, "Emergency Status must be provided"],
        enum: ['emergency','not emergency']
    },
    problemCategory:{
        required : [true, "Problem Category must be provided"],
        type: String
    },
 
    problemDescription:{
        required : [true, "Problem Description must be provided"],
        type: String
    },
    latitude:{
        required : [true, "Latitude must be provided"],
        type: Number
 
    },
    longitude:{
        required : [true, "Longitude must be provided"],
        type: Number
    },
    status:{
        type: String,
        enum: ['solved','not solved'],
        default: 'not solved'
    },
    image:{
        type: String
    },
    problemAddress:{
        required : [true, "Address must be provided"],
        type: String
    }
},{
    timestamps: true
}
 
)
 
const Reports = mongoose.model("Reports", reportsSchema)
module.exports = Reports