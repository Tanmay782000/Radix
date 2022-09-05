const express = require("express")
const router = express.Router()
const student = require("./student/student.js")
const employee = require("./employee/employee.js")


router.use('/employee',employee)
router.use('/student',student)

module.exports = router