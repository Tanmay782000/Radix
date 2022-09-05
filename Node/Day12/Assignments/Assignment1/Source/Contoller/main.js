const mongoose = require('mongoose')
const express = require("express")
const app = express()
const router = express.Router()
const student = require("./Students/student.js")
const employee = require("./Employee/employee.js")
const validate = require('mongoose-validator')
app.use(express.json())

router.use('/student', student)
router.use('/employee', employee)


const set_name = [
    validate({
        validator: 'isLength',
        arguments: [2, 30],
        message: "Name should must be in range of 2 to 30"
    })
]

var set_age = [
    validate({
        validator: function (val) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(val > 10)
                }, 500)
            })
        },
        message: 'count is must more than 10'
    })
]

var less_spi = [
    validate({
        validator:function(value){
            return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                   resolve(value<10)
               },500)  
            })
        },
        message:"SPI is less than 10"
    })
]

const Cschema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true, validate: set_name },
    fees:{type:{
        semester1: String,
        semester2: String,
        semester3: String,
        semester4: String
    },required:true},
    result:{type:{
        semester1: Number,
        semester2: Number,
        semester3: Number,
        semester4: Number
    },required:true,validate:less_spi},
    age: { type: Number, required: true, validate: set_age }
})
const Cmodel = mongoose.model('students', Cschema)


const CEschema = new mongoose.Schema({
    id: Number,
    Name: {type:String,required:true},
    department: {type:String,required:true},
    Assignments: {type:{
        assignment1: String,
        assignment2: String,
        assignment3: String,
        assignment4: String
    },required:true}
})



const CEmodel = mongoose.model('Employee', CEschema)


module.exports.Cmodel = Cmodel
module.exports.CEmodel = CEmodel
module.exports = router


