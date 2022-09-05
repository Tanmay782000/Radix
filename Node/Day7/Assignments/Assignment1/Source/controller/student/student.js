const express = require("express")
const api = express()
const router = express.Router()
const fs = require('fs')
router.use(express.json())


class EmployeeData {
    static getdata(req, res) {
        fs.readFile("JSON/stu.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(data)
                res.send(data)
                res.end()
            }
        })
    }

    static EmployeeId(req,res) {
       var array1 = []
        fs.readFile("JSON/stu.json", "utf-8", (err, data) => {
        array1 = JSON.parse(data)  
        array1.find((a)=>{
            if(a.id == parseInt(req.params.id))
            {
                res.send(JSON.stringify(a.assignments))
                res.end()
            } 
        })
    })
    }


    static AssignmentId(req,res){
        var array1 = []
        fs.readFile("JSON/stu.json", "utf-8", (err, data) => {
        array1 = JSON.parse(data)  
        array1.find((a)=>{
            if(a.id == parseInt(req.params.id))
            {
             a.assignments.find((ab)=>{
                 if(ab.ActionCode == parseInt(req.params.AID))
                 {
                 res.send(ab)
                 res.end()
                 }
             })
            } 
        })
    })
    }



    
    static AssignmentUpdate(req,res){
        var array1 = []
        var final = ""
        fs.readFile("JSON/stu.json", "utf-8", (err, data) => {
        array1 = JSON.parse(data)  
        array1.find((a)=>{
            if(a.id == parseInt(req.params.id))
            {
            this.final = a.assignments.find((ab)=>{
              { 
                  if(ab.AssignmentId == parseInt(req.params.AID))
                  {
                    return res.send(ab)
                  }
                  res.end()
              }
             })
            }
        })
        console.log(this.final.ActionReasonCode = req.body.ActionReasonCode)
        this.final.ActionReasonCode = req.body.ActionReasonCode
        console.log(this.final.ActualTerminationDate = req.body.ActualTerminationDate)
        this.final.AssignmentCategory = req.body.AssignmentCategory
        this.final.AssignmentName = req.body.AssignmentName
        this.final.AssignmentNumber = req.body.AssignmentNumber
        


        fs.writeFile("JSON/stu.json",JSON.stringify(array1),(err)=>{
            
            console.log("data updated")
        })
    })
    }
}


router.get('/', (req, res) => EmployeeData.getdata(req, res))

router.get('/:id/child/assignments',(req ,res)=> EmployeeData.EmployeeId(req,res))

router.get('/:id/child/assignments/:AID',(req ,res)=> EmployeeData.AssignmentId(req,res))

router.put('/:id/child/assignments/:AID',(req ,res)=> EmployeeData.AssignmentUpdate(req,res))

module.exports = router