const express = require("express")
const { use } = require("../../../Practice/Practice3/Source/contollers")

const api = express()
const file = require('./controller/index.js')



const infomiddleware = (req,res,next) => {
    console.log(`${req.url} ${req.method} ${new Date()}`)
next()
}

api.use(infomiddleware)
api.use('/',file)

api.listen(9000,()=>{
    console.log("server started")
})