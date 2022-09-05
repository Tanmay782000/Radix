let express=require("express");
let jwt=require("jsonwebtoken");
let fs=require("fs");

let verifyuser=require("./middleware/verify");
global.config=require("./config");
let app=express();

app.use(express.static("public"));

app.use(express.json())

app.post("/login",(req,res)=>{
    if(req.body.username=="admin" && req.body.password=="admin")
    {
        let user={UserName:"varsha",Role:["admin","HR"]}
    let token=    jwt.sign(user,global.config.key,{
           
            algorithm:global.config.algorithm,
            expiresIn:global.config.expiresin
        })
        res.status(200).send({status:"login successful",Token:token})
    }
    else
    {
        res.status(401).send({status:"Invalid user"})
    }
    res.end();
})


app.listen(7000,()=>{
    console.log("server starting at 7000")
})