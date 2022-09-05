const http = require('http')
const localhost = 3001
const fs = require('fs')
http.createServer(function(req,res) {
    if(req.url == '/')
    {
     fs.readFile("person.json","utf-8",function(err,suc){
        if(err) throw err
        else{
        console.log(suc)
        res.write(JSON.stringify(suc))
        res.end()
        }
    }) 
} 
}).listen(localhost)
           
          