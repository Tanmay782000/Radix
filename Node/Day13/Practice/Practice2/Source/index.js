const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/practice4")
.then(()=>console.log("connected"))
.catch(()=>console.log("not connected"))


const schema1 = new mongoose.Schema({
    name:String,
    department:String,
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    }
})
const student = mongoose.model("student",schema1)

const schema2 = new mongoose.Schema({
    Subjects:String  
})

const course = mongoose.model("course",schema2)


app.post("/student",(req,res)=>{
 var md = student(req.body)
 md.save()
 res.end()
})

app.post("/course",(req,res)=>{
    var md = course(req.body)
    md.save()
    res.end()
   })

async function myfunction()
{
    const vard = await student.find().populate('course').select("name")
    console.log(vard)
}
myfunction()

app.listen(3040,()=>{
    console.log("server started at 3040")
})