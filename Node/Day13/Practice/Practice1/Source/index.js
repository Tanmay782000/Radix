const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/practice3")
.then(()=>console.log("connected"))
.catch(()=>console.log("not connected"))


const schema1 = new mongoose.Schema({
    name:String,
    department:String,
})

const StudentDetails1 = mongoose.model("prac3.1",schema1)

const schema2 = new mongoose.Schema({
    subject:String,
    StudentDetails1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'prac3.1'
    }
})

const StudentDetails2 = mongoose.model("prac3.2",schema2)

async function first()
{
    const res1 = new StudentDetails1({
        "name":"Vishwa Shah",
        "department":"Electrical"
    })
    var md = await res1.save()
}
first()

async function second()
{
    const res1 = new StudentDetails2({
        "subject":"commerce",
        "StudentDetails1":"62a1c9fdcad17392c33c13b4"
    })
    var md = await res1.save()
}
second()

async function listcourse(){
    const course = await StudentDetails2.find().populate('StudentDetails1').select('subject StudentDetails1')
    console.log(course)
}
listcourse()