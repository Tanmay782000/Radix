const mongoose = require('mongoose')
const express = require("express")
const app = express()
const main = require('./Contoller/main.js')


app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MainDb")
    .then(() => console.log("connected"))
    .catch(() => console.log("not connected"))


app.use('/', main)
app.listen(7090, () => {
    console.log("server started at 7090")
})
