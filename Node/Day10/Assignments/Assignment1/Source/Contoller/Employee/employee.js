const jwt = require("jsonwebtoken")
const express = require("express")
const app = express()
const router = express.Router()
const emp = require('../main.js')
const index = require('../../Middleware/auth')
global.config = require('../../Middleware/config')
app.use(express.json());


router.post("/", (req, res, next) => {
    if (req.body.username == "employee" && req.body.password == "employee") {
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

router.post('/AddData', [index], (req, res) => {
    var td = new emp.CEmodel(req.body)
    td.save()
    res.end()
})

router.get("/assignments", [index], (req, res) => {
    emp.CEmodel.find((err, data) => {
        res.send(data)
        res.end()
    })
})

router.get("/assignment/:id", [index], (req, res) => {
    emp.CEmodel.find((err, data) => {
        if (err) throw err
        else
            var resul = data.find((Ab) => {
                if (Ab.id === parseInt(req.params.id)) {
                    return Ab
                }
                else {
                    console.log("fail")
                }
            })
        res.send(resul.Assignments)
        res.end()
    })
})




module.exports = router