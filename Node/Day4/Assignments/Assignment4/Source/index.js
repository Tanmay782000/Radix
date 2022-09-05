const file = require('fs')
const http = require('http')
var stng = "my name is tanmay"
http.createServer(function(req,res){
 if(req.url == '/update')
 {
   file.readFile("dummy.txt",function(err,op){
    if(err) {throw err}
    else
    {
    res.write(op)
    console.log(op)
    res.end()
 }})
 }
 
}).listen(8000)