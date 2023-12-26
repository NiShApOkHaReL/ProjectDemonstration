const { reportProblem } = require("../../controller/user/reportProblem")
const isAuthenticated = require("../../middleware/isAuthenticated")
const catchAsync = require("../../services/catchAsync")

const router = require("express").Router()
const {multer, storage} = require("../../middleware/multerConfig")
const { viewMyReports } = require("../../controller/user/viewMyReports")
const { getSingleReport } = require("../../controller/admin/getReports")
const upload = multer({storage : storage})


router.route("/report").post(upload.single("image"), isAuthenticated,  reportProblem).get(isAuthenticated,catchAsync(viewMyReports))
router.route("/getreport/:id").get(catchAsync(getSingleReport))



module.exports = router