const express = require("express")
const cors = require("cors")
require("dotenv").config()

const authRoute = require("./routes/user")
const resumeRoute = require("./routes/resume")

const { handleGetUserByAuthToken, handleAuthorizeUserByRole } = require("./middlewares/auth")
const { connectToMongo } = require("./connections")

const PORT = process.env.PORT || 5000
const app = express()
connectToMongo(process.env.MONGO_URL)
    .then(console.log("Mongo Connected"))
    .catch(err => console.log(err.message))


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


// For Testing
app.get("/", async (req, res) => {
    res.send("Home page")
})




// Routes
app.use("/api/user", authRoute);
app.use("/api/resume", resumeRoute);


app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
})




