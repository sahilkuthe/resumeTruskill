const express = require("express")
const { handleCreateResume, handleGetAllResumes, handleDeleteResumeWithId, handleGetResumeById } = require("../controllers/resume")
const { handleGetUserByAuthToken } = require("../middlewares/auth")
const router = express.Router()

router.post("/", handleGetUserByAuthToken, handleCreateResume)
router.get("/", handleGetUserByAuthToken, handleGetAllResumes)
router.delete("/", handleGetUserByAuthToken, handleDeleteResumeWithId)
router.get("/:resumeId", handleGetUserByAuthToken, handleGetResumeById)

module.exports = router