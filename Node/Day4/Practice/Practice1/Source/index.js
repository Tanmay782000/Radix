const fs = require('fs')
var http = require('http');
require('dotenv').config()
//create a server object:
http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile('person.json', function (err, suc) {
            if (err) throw err
            else
            console.log(JSON.parse(suc))
                res.write(JSON.stringify(suc))
            res.end();
        })
    } //end the response
}).listen(process.env.port, () => {
    console.log(`server stated a ${process.env.port}`)
}); //the server object listens on port 8080 
console.log(process.env.port)