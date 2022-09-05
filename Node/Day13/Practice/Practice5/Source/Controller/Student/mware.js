let jwt = require('jsonwebtoken')
let express = require('express')
let app = express.Router()

const verify = (req,res,next) => {
if(req.headers["token"],global.config.key,{algorithm:global.config.algorithm},(err,data)=>{
    
}){
    jwt.verify()
}
}