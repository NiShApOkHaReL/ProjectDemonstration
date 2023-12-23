const Reports = require("../../model/reportsModel")

exports.getReports= async(req,res)=>{
    const reports = await Reports.find()
    if(reports.length == 0 ){
        return res.status(404).json({
            message : "No reports",
            data : []
        })
    }
    res.status(200).json({
        message : "Orders Fetched Successfully",
        data : reports
    })
}