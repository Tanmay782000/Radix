const express = require('express')

const api = express()
global.student = require('./JSON/student.json')
const file = require("./contollers/index.js")


api.listen(7000,()=>{
    console.log("tanmay")
})
api.use('/',file)