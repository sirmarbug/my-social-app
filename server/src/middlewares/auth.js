const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]

    if (!token) {
        return res.status(403).json({
            error: {
                message: 'A token is required for authentication'
            }
        })
    }

    try {
        const { TOKEN_KEY } = process.env

        const decode = jwt.verify(token, TOKEN_KEY)
        req.user = decode
    } catch (e) {
        return res.status(401).json({
            error: {
                message: 'Invalid Token'
            }
        })
    }
    return next()
}

module.exports = verifyToken