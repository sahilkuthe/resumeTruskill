const jwt = require("jsonwebtoken");

async function handleGetUserByAuthToken(req, res, next) {
    try {
        const { authtoken } = req.headers
        if (!authtoken) {
            return res.status(400).json({
                success: false,
                message: "Login with correct creds"
            })
        }
        const data = jwt.verify(authtoken, process.env.JWT_SECRET)
        req.data = data
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    handleGetUserByAuthToken
}