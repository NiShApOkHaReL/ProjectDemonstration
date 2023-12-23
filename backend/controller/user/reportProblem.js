const Reports = require("../../model/reportsModel")

exports.reportProblem = async(req,res)=>{
    const {emergencyStatus, problemCategory, problemDescription, latitude, longitude,status, problemAddress } = req.body
    
    const file = req.file
    let filePath
    if(!file){
        filePath = "https://www.google.com/url?sa=i&ur.l=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fproduct%2520photography%2F&psig=AOvVaw3ovyQCK4IW4BZPPk53Rnit&ust=1701585790256000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPigypaT8IIDFQAAAAAdAAAAABAF"
    }else{
        filePath = req.file.filename
    }
 
    const userId = req.user.id
    console.log(userId)
    
    if( !emergencyStatus || !problemCategory || !problemDescription || !latitude || !longitude || !status || !problemAddress){
        return res.status(400).json({
            message: "Pleaase provide all the details"
        })
    }
 
    await Reports.create({
        userId: userId,
        emergencyStatus: emergencyStatus,        
        problemCategory: problemCategory,
        problemDescription: problemDescription,
        latitude: latitude,
        longitude: longitude,
        status: status,
        image : process.env.BACKEND_URL + filePath,
        problemAddress: problemAddress
    })
    return res.status(200).json({
        message: "Problem reported successfully"
    })
 
}