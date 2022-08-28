const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    author: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true}
    },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", postSchema)
