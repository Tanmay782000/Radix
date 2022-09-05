const express = require("express")
const router = express.Router()
const fs = require('fs')
const app = express()

router.get('/',(req,res)=>{
    fs.readFile('student.json',"utf-8",(err,data)=>{
        if(err)
        {
            console.log(err)
        }

        console.log(data)
        res.end()
    })
})
module.exports= router