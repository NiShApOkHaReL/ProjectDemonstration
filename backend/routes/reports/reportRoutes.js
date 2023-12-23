const { reportProblem } = require("../../controller/user/reportProblem")
const isAuthenticated = require("../../middleware/isAuthenticated")
const catchAsync = require("../../services/catchAsync")

const router = require("express").Router()
const {multer, storage} = require("../../middleware/multerConfig")
const upload = multer({storage : storage})


router.route("/report").post(isAuthenticated, upload.single("image"), catchAsync(reportProblem))


module.exports = router