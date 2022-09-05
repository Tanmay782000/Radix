var prc = process.argv;
var md = require('./home')
function my()
{
    console.log("hello1123 ")
}
my()

var fs = require("fs")

var message = fs.readFileSync("prac1.txt")
console.log(message.toString())


console.log(prc)
console.log(md.tanmay(20,20))