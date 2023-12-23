// catch asynchronous error
// if one function return another function then it is caled higher order function
 
module.exports = (fn) =>{
    return(req,res,next)=>{
        fn(req,res,next).catch((err)=>{
            return res.status(500).json({
                message : err.message,
                fullError : err
            })
        })
    }
}