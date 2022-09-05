var express = require('express');
var app = express();
var path = require('path');
const { Router } = require('express');
var router = express.Router()
// Static Middleware 
app.use(express.static('public'))
    
router.use((req,res,next)=>{
    console.log(req.method)
next()
})

app.use('/', router)

app.use('/',(req,res,next)=>{
    res.send("asdasd")
    console.log("tes asend")

})
app.use('/',(req,res,next)=>{
    const tm = new Promise((resolve,reject)=>{
         resolve("my app")
    })
    tm.then((td)=> res.send(td))
    next()

})


app.listen(8000,()=>{

})