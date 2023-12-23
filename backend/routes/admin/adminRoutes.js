const { getReports } = require("../../controller/admin/getReports")
const isAuthenticated = require("../../middleware/isAuthenticated")
const restrictTo = require("../../middleware/restrictTo")

const router = require("express").Router()

router.route("/getReports").get(isAuthenticated,restrictTo('admin'), getReports )

module.exports = router