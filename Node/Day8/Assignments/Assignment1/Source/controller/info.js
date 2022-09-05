const express = require("express")
const router = express.Router()
const student = require("./student/student.js")

router.use('/emp',student)

module.exports = router