const jwt = require("jsonwebtoken")
const express = require("express")
const app = express()
const router = express.Router()
const emp = require('../main.js')
const index = require('../../Middleware/auth')
global.config = require('../../Middleware/config')
app.use(express.json());



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



router.get('/get', [index], (req, res) => {
    emp.Cmodel.find((err, data) => {
        if (err) throw err
        res.send(data)
        res.end()
    })
})


router.post('/post', [index], (req, res) => {
    var data = new cm.Cmodel(req.body)
    data.save()
    res.end()
})


router.get("/assignment/:id", [index], (req, res) => {
    emp.Cmodel.find((err, data) => {
        if (err) throw err
        else
            var resul = data.find((Ab) => {
                if (Ab.id === parseInt(req.params.id)) {
                    return Ab.result
                }
                else {
                    console.log("fail")
                }
            })
        res.send(resul)
        res.end()
    })
})




router.get("/assignment/:id/result", [index], (req, res) => {
    emp.Cmodel.find((err, data) => {
        if (err) throw err
        else
            var resul = data.find((Ab) => {
                if (Ab.id === parseInt(req.params.id)) {
                    return Ab.result
                }
                else {
                    console.log("fail")
                }
            })
        res.send(resul.result)
        res.end()
    })
})


router.get("/assignment/:id/fees", [index], (req, res) => {
    emp.Cmodel.find((err, data) => {
        if (err) throw err
        else
            var resul = data.find((Ab) => {
                if (Ab.id === parseInt(req.params.id)) {
                    return Ab.result
                }
                else {
                    console.log("fail")
                }
            })
        res.send(resul.fees)
        res.end()
    })
})


module.exports = router