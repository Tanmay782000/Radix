var fs = require('fs')
const http = require('http')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

http.createServer(function(req,res){
if(req.url == '/')
{
    rl.question("enter name:",function(op) {
    const vowels = op.match(/[aeiou]/gi); 
    console.log(vowels[0])   
    res.write(`First vowel is ${vowels[1]}`)
    res.end()
})
}
}).listen(8010)