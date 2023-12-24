const Reports = require("../../model/reportsModel")
const User = require("../../model/userModel")

exports.getReports= async(req,res)=>{
    const reports = await Reports.find()
    if(reports.length == 0 ){
        return res.status(404).json({
            message : "No reports",
            data : []
        })
    }
    res.status(200).json({
        message : "Reports Fetched Successfully",
        data : reports
    })
}

exports.getSingleOrder = async(req,res)=>{
    const {id} = req.params 
    // check if order exist or not 
    const report= await Reports.findById(id)
    if(!report){
        return res.status(404).json({
            message : "No report found with that id"
        })
    }
    res.status(200).json({
        message : "Report fetched successfully",
        data : report
    })
}

exports.viewUsers = async(req,res)=>{
    const users = await User.find()
    if(users.length == 0){
       return res.status(404).json({        
        message : "Users not found",
        data : []
       })
    }
    res.status(200).json({
        message : "Users fetched successfully",
        data : users
    })
}


