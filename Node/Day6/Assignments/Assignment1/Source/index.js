var express = require("express")
var app = express()
var fs = require("fs")

console.log("asdasda")


app.get('/', (req, res) => {
    res.write("<h1>welcome to student's portal</h1>")
    res.end()
})



app.get('/students', (req, res) => {
    fs.readFile("./student.json", "utf-8", (err, data) => {
        res.write(data)
        res.end()
    })
})

app.get('/students/:id', (req, res) => {
    data123 = []
    fs.readFile("./student.json", (err, data) => {
        if(err){
            console.log("errrr")
        }
        data123 = JSON.parse(data)
        const result = data123.find((a) => {
            return a.ID === parseInt(req.params.id)
        })
        console.log(result)
        res.write(JSON.stringify(result))
        res.end()
    })
})



app.get('/students/:id/fee', (req, res) => {
    data123 = []
    fs.readFile("./student.json", (err, data) => {
        if(err){
            console.log("errrr")
        }
        data123 = JSON.parse(data)
            data123.find((a) => {
            if(a.ID === parseInt(req.params.id))
            {
             res.write(JSON.stringify(a.Fees))
             res.end()
            }
        })    
    })
})



app.get('/students/:id/result', (req, res) => {
    data123 = []
    fs.readFile("./student.json", (err, data) => {
        if(err){
            console.log("errrr")
        }
        data123 = JSON.parse(data)
            data123.find((a) => {
            if(a.ID === parseInt(req.params.id))
            {
             res.write(JSON.stringify(a.Result))
             res.end()
            }
        })    
    })
})




app.listen(9000, () => {
    console.log("server started")
})