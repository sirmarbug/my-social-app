const { objectIdIsValid } = require("../utils/validations")
const Like = require("../models/like")

const like = async (req, res) => {
    try {
        const { userId } = req.user
        const { postId } = req.body

        if (!postId || !objectIdIsValid(postId)) {
            return res.status(400).json({
                error: {
                    message: "Post id is required"
                }
            })
        }

        await Like.create({
            userId,
            postId
        })

        return res.status(200).send()
    } catch (e) {
        return res.status(500).json(e)
    }
}
const unlike = async (req, res) => {
    try {
        const { userId } = req.user
        const { postId } = req.body

        if (!postId || !objectIdIsValid(postId)) {
            return res.status(400).json({
                error: {
                    message: "Post id is required"
                }
            })
        }

        await Like.findOneAndRemove({
            userId,
            postId
        })

        return res.status(200).send()
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    like,
    unlike
}
