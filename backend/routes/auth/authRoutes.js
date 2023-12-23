const { registerUser, loginUser } = require("../../controller/auth/authController")
const { reportProblem } = require("../../controller/user/reportProblem")
const isAuthenticated = require("../../middleware/isAuthenticated")
const catchAsync = require("../../services/catchAsync")

const router = require("express").Router()

router.route("/register").post(catchAsync(registerUser))
router.route("/login").post(loginUser)





module.exports = router