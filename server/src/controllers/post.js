const { objectIdIsValid } = require("../utils/validations")
const Post = require("../models/post")
const Like = require("../models/like")

const getAll = async (req, res) => {
    try {
        const likes = await Like.find({ userId: req.user.userId }).lean()
        const posts = await Post.find().lean()
        const result = posts
            .map(p => ({ ...p, like: !!likes.find(l => l.postId === p._id.toString()) }))
            .reverse()

        return res.status(200).json({
            items: result,
            total: result.length
        })
    } catch (e) {
        return res.status(500).json(e)
    }
}

const my = async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.user.userId }).lean()
        const result = posts.reverse()

        return res.status(200).json({
            items: result,
            total: result.length
        })
    } catch (e) {
        return res.status(500).json(e)
    }
}

const create = async (req, res) => {
    try {
        const { text } = req.body
        const { userId, firstName, lastName } = req.user

        if (!text) {
            return res.status(400).json({
                error: {
                    message: 'text is required'
                }
            })
        }

        const post = await Post.create({
            userId: userId,
            author: {
                firstName,
                lastName
            },
            text
        })

        return res.status(201).json(post)
    } catch (e) {
        return res.status(500).json(e)
    }
}

const update = async (req, res) => {
    try {
        const postId = req.params.id

        if (!postId || !objectIdIsValid(postId)) {
            return res.status(400).json({
                error: {
                    message: "Post id is required"
                }
            })
        }

        const { text } = req.body

        if (!text) {
            return res.status().json({
                error: {
                    message: 'Text is required'
                }
            })
        }

        const result = await Post.findOneAndUpdate({
            _id: postId
        }, {
            text
        }, { new: true, runValidators: true })

        if (result) {
            return res.status(200).send()
        } else {
            return res.status(404).json({
                error: {
                    message: "Post not found"
                }
            })
        }
    } catch (e) {
        return res.status(500).json(e)
    }
}

const remove = async (req, res) => {
    try {
        const postId = req.params.id

        if (!postId || !objectIdIsValid(postId)) {
            return res.status(400).json({
                error: {
                    message: "Post id is required"
                }
            })
        }

        const result = await Post.findOneAndRemove({ _id: postId })

        if (result) {
            return res.status(200).send()
        } else {
            return res.status(404).json({
                error: {
                    message: "Post not found"
                }
            })
        }
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    getAll,
    my,
    create,
    update,
    remove
}
