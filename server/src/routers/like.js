const express = require("express")
const {like, unlike} = require("../controllers/like");
const router = express.Router()

router.post('/like', like)
router.post('/unlike', unlike)

module.exports = router
