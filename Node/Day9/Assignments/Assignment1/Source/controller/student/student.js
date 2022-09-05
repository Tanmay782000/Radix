const express = require("express")
const auth = require('../../middleware/auth.js')
const router = express.Router()
let jwt = require("jsonwebtoken");
global.config = require("../../middleware/config");
const app = express()
router.use(express.json())
const fs = require("fs")


router.post("/", (req, res, next) => {
    if (req.body.username == "admin" && req.body.password == "admin") {
        let user = { UserName: "TANMAY", Role: ["admin", "Developer"] }
        let token = jwt.sign(user, global.config.key, {

            algorithm: global.config.algorithm,
            expiresIn: global.config.expiresin
        })
        res.status(402).send({ status: "success", token: token })
        next()
    }
    else {
        res.status(401).send({ status: "Invalid user" })
    }
    res.end();
})

router.get('/:id/fees', [auth], (req, res) => {
    fs.readFile("./JSON/student.json", (err, data) => {
        if (err) {
            console.log("error generated")
            res.end()
        }
        else {
            var dataArray = []
            dataArray = JSON.parse(data)
            var result = dataArray.find((a)=> { 
             if(a.id === parseInt(req.params.id))
             {
               return res.send(a.fees)
             }
            })
            res.end()
        }
    })
})

router.get('/:id/result', [auth], (req, res) => {
    fs.readFile("./JSON/employee.json", (err, data) => {
        if (err) {
            console.log("error generated")
            res.end()
        }
        else {
            var dataArray = []
            dataArray = JSON.parse(data)
            var result = dataArray.find((a)=> { 
             if(a.id === parseInt(req.params.id))
             {
               return res.send(a.result)
             }
            })
            res.end()
        }
    })
})


module.exports = router
