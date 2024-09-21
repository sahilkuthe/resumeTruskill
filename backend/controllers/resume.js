const resume = require("../models/resume");
const user = require("../models/user");

async function handleCreateResume(req, res) {
    try {
        const createdResume = await resume.create(req.body)
        if (!createdResume) {
            return res.status(400).json({
                success: false,
                message: "Could not create the resume"
            })
        }
        const foundUser = await user.findById(req.data._id)
        foundUser.resumes.push(createdResume)
        await foundUser.save()

        return res.status(201).json({
            success: true,
            data: createdResume
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleGetAllResumes(req, res) {
    try {
        const foundUser = await user.findById(req.data._id).populate("resumes")
        return res.status(200).json({
            success: true,
            data: foundUser.resumes
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleDeleteResumeWithId(req, res) {
    try {
        const { resumeId } = req.query
        if (!resumeId) {
            return res.status(400).json({
                success: false,
                message: "Please provide the resume ID to delete it"
            })
        }
        await resume.findByIdAndDelete(resumeId)
        await user.findByIdAndUpdate(req.data._id, { $pull: { resumes: resumeId } }, { new: true })
        return res.status(200).json({
            success: true,
            message: "Resume Deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleGetResumeById(req, res) {
    try {
        const { resumeId } = req.params
        if (!resumeId) {
            return res.status(400).json({
                success: false,
                message: "Please provide the resume ID"
            })
        }
        const foundResume = await resume.findById(resumeId)
        if (!foundResume) {
            return res.status(400).json({
                success: false,
                message: "Could not find the resume with this ID"
            })
        }
        return res.status(200).json({
            success: true,
            data: foundResume
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    handleCreateResume,
    handleGetAllResumes,
    handleDeleteResumeWithId,
    handleGetResumeById
}