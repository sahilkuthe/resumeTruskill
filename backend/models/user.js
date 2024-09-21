const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const userSchema = mogoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    resumes: {
        type: [{ type: mogoose.Types.ObjectId, ref: "resume" }],
        default: []
    }
}, { timestamps: true })

const user = mongoose.model("user", userSchema)
module.exports = user