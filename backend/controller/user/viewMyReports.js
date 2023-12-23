const Reports = require("../../model/reportsModel")

exports.viewMyReports =async (req,res)=>{
    userId = req.user.id
    
    reports =await Reports.find({UserId: userId})
    console.log(reports)
    if(!reports){
        return res.status(400).json({
            message: "No Reports found"
        })
    }
    res.status(200).json({
        message: "Reports fetched successfully",
        data: reports
    })
}