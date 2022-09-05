const mongoose = require("mongoose")
const validate = require("mongoose-validator")
const express = require("express")
const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/practice2")
    .then(() => console.log("connected"))
    .catch(() => console.log("not connected"))

var get_name = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: "Name should be between 3 and 50 characters"
    })
]

var get_age = [
    validate({
        validator: function(val){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(val > 0)
                },500)
            })
        },
        message:'count is must positive' 
    })
]

const CSchema = new mongoose.Schema({
    name: {type: String, required: true, validate: get_name},
    age:{type:Number,require:true,validate:get_age}
})

const Cmodel = mongoose.model("prac2", CSchema)

app.post('/add', validate(get_name),(req, res) => {
    var result = Cmodel(req.body)
    result.save()
    res.end()
})

app.listen(4040, () => {
    console.log("server started at 4000")
})







