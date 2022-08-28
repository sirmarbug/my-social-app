const express = require("express")
const {current} = require("../controllers/user");
const router = express.Router()

router.get('/current', current)

module.exports = router
