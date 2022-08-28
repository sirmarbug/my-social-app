const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    postId: { type: String, required: true }
})

module.exports = mongoose.model("like", likeSchema)
