const express = require("express")
const mware = require('./mware')
const router = express.Router()
let jwt = require("jsonwebtoken");
global.config = require("./config");
const app = express()
router.use(express.json())


router.post("/", (req, res, next) => {
    if (req.body.username == "admin" && req.body.password == "admin") {
        let user = { UserName: "tanmay", Role: ["admin", "webdeveloper"] }
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


router.get('/data', [mware], (req, res) => {
    res.send("data acceess")
    res.end()
})


module.exports = router

