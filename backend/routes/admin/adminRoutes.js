const { getReports, viewUsers } = require("../../controller/admin/getReports")
const isAuthenticated = require("../../middleware/isAuthenticated")
const restrictTo = require("../../middleware/restrictTo")

const router = require("express").Router()

router.route("/getReports").get( getReports )
router.route("/users").get(viewUsers)

module.exports = router