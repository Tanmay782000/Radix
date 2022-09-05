const express = require("express")
const router = express.Router()
const studentapi = require('./student/student')
router.use('/student',studentapi)

module.exports = router

