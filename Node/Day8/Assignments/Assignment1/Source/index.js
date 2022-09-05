const express = require("express")
const api = express()
const info = require("./controller/info.js")


api.listen(8000,()=>{
     console.log("serve started at 7000")
})


api.use('/',info)