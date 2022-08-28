require("dotenv").config()
require("./configs/db").connect()
const express = require("express")
const cors = require('cors')
const auth = require("./routers/auth")
const user = require("./routers/user")
const post = require("./routers/post")
const like = require("./routers/like")
const authMiddleware = require("./middlewares/auth")

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', auth)
app.use('/api/user', authMiddleware, user)
app.use('/api/posts', authMiddleware, post)
app.use('/api/posts', authMiddleware, like)

module.exports = app
