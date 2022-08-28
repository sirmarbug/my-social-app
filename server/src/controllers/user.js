const User = require("../models/user")
const { objectIdIsValid } = require("../utils/validations")

const current = async (req, res) => {
    try {
        const userId = req.user.userId

        if (!userId || !objectIdIsValid(userId)) {
            return res.status(400).json({
                error: {
                    message: "Invalid user id"
                }
            })
        }

        const recommend = await User.findOne({ _id: userId })

        return res.status(200).json(recommend)
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    current
}
