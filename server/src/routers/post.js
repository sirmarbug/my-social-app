const express = require("express")
const {create, getAll, my, update, remove} = require("../controllers/post");
const router = express.Router()

router.get('/', getAll)
router.get('/my', my)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
