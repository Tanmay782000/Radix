const express = require("express")
const api = express()
const router = express.Router()
const mongoose = require('mongoose');
api.use(express.json());


mongoose.connect("mongodb://localhost:27017/student")
    .then(() => console.log("connectd to DB"))
    .catch(() => console.log("not catch db"))

const source = new mongoose.Schema({
    myid: Number,
    name: String,
    city: String,
    state: String,
    country: String
})

const course2 = mongoose.model('student', source)
api.get('/data', (req, res) => {
    course2.find((err, data) => {
        res.send(data);
        res.end()
    })
})

api.post("/add", (req, res) => {
    var data = new course2(req.body);
    data.save();
    res.end();
})

const course3 = mongoose.model('student', source)
api.put("/update/:id", (req, res) => {
    course3.find((err, data) => {
        if (err) throw err
        else
            data.find((Ab) => {
                if (Ab.myid === parseInt(req.params.id)) {
                    console.log("ok")
                    console.log(req.body.id)
                    const filter = Ab;
                    const options = req.body;
                    course3.updateMany(filter, options, function (err) {
                        if (err) throw err
                    })
                }
                else {
                    console.log("fail")
                }
            })
        res.end()
    })
})



api.put("/delete/:id", (req, res) => {
    course3.find((err, data) => {
        if (err) throw err
        else
            data.find((Ab) => {
                if (Ab.myid === parseInt(req.params.id)) {
                    console.log("ok")
                    console.log(req.body.id)
                    var myquery = { "myid": req.body.id }
                    course3.deleteOne(myquery, function (err) {
                        if (err) throw err
                        else
                            console.log("deleted record successfully")
                    })
                }
                else {
                    console.log("fail")
                }
            })
        res.end()
    })
})


api.listen(7070, () => {
    console.log("started")
})
