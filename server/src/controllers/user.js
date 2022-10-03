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

        const user = await User.findOne({ _id: userId })

        return res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        })
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    current
}
