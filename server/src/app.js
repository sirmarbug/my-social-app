require("dotenv").config()
require("./configs/db").connect()
const express = require("express")
const cors = require('cors')
const auth = require("./routers/auth")
const user = require("./routers/user")
const authMiddleware = require("./middlewares/auth")

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', auth)
app.use('/api/user', authMiddleware, user)

module.exports = app
