const mongoose = require('mongoose')
const express = require("express")
const app = express()
const router = express.Router()
const student = require("./Students/student.js")
const employee = require("./Employee/employee.js")
app.use(express.json())

router.use('/student', student)
router.use('/employee', employee)

const Cschema = new mongoose.Schema({
    id: Number,
    name: String,
    fees: {
        semester1: String,
        semester2: String,
        semester3: String,
        semester4: String
    },
    result: {
        semester1: String,
        semester2: String,
        semester3: String,
        semester4: String,
    }
})

const Cmodel = mongoose.model('students', Cschema)


const CEschema = new mongoose.Schema({
    id: Number,
    Name: String,
    department: String,
    Assignments: {
        assignment1: String,
        assignment2: String,
        assignment3: String,
        assignment4: String
    }
})

const CEmodel = mongoose.model('Employee', CEschema)


module.exports.Cmodel = Cmodel
module.exports.CEmodel = CEmodel
module.exports = router