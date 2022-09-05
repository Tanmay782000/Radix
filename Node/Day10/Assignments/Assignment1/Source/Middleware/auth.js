let jwt = require("jsonwebtoken");
let express = require("express")
let router = express.Router()

verifyuser = (req, res, next) => {
    if (req.headers["token"]) {
        jwt.verify(req.headers["token"], global.config.key, { algorithms: global.config.algorithm }, (err, decoded) => {
            if (err) {
                return res.status(401).send("Error occur")
            }
            if (decoded) {
                req.headers["data"] = decoded;
                next();
            }
        })
    }
    else {
        return res.status(401).send("Token not provided");
    }
}
module.exports = router
module.exports = verifyuser;