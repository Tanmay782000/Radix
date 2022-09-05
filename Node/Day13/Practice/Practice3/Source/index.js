const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/practice5")
.then(()=>console.log("connected"))
.catch(()=>console.log("not connected"))

const schema1 = new mongoose.Schema({
    name:String,
    department:String,
    collage:String,
    referances:[{
    contact1:Number,
    contact2:Number
    }]
})

const student = mongoose.model("student",schema1)

app.post("/post",(req,res)=>{
var md = student(req.body)
md.save()
res.end()
})

app.get("/get/:id",async(req,res)=>{
    var id = req.params.id
    var result = await student.findById(id)
    res.send(result)
    res.end()
})

app.put("/put/:id",async(req,res)=>{
    var id = req.params.id
    var result = await student.findById(id)
    result.referances.push(req.body)
    result.save()
    res.end()
})


app.listen(4050,()=>{
    console.log("server started at 4050")
})