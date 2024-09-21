const user = require("../models/user")
const jwt = require("jsonwebtoken")

async function handleCreateUser(req, res) {
    try {
        const { email } = req.body
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            })
        }
        if (!email.includes("@")) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email"
            })
        }
        // const alreadyUserWithEmail = await user.findOne({ email })
        // if (alreadyUserWithEmail) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "User with this email already exists"
        //     })
        // }
        const createdUser = await user.findOneAndUpdate({ email }, { email }, { upsert: true, new: true })
        const payload = {
            _id: createdUser._id,
            email: createdUser.email
        }

        const authToken = jwt.sign(payload, process.env.JWT_SECRET)
        return res.status(201).json({
            success: true,
            data: createdUser,
            authToken
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    handleCreateUser
}