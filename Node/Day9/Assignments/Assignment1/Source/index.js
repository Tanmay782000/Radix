const express = require("express")
const app = express()
const controller = require("./controller/controller.js")
const auth = require("./middleware/auth.js")
const config = require("./middleware/config.js")

app.listen(9000,()=>{
    console.log("server started at 9000")
})


app.use('/',controller)

