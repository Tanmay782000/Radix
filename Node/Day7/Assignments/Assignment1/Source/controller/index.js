const express = require("express")
const api = express()
const router = express.Router()
const studentapi = require('./student/student.js')



router.use('/emp',studentapi)

module.exports = router
