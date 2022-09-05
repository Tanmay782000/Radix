const express = require('express')
const api = express()


api.get('/',function(req,res,next){
    var ab = 2
    if(ab==3)
    {
    console.log("second fun")
    next()
    }
    else{
       throw new Error
    }
    res.end() 
})

api.get('/',function(req,res,next){
    console.log("first fun")
    next()
})

api.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("505 not found")
})


api.listen(3000,()=>{
    console.log("server is started")
})



