var sd = require('fs')
const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout,
})
var question = [{name:""}]

readline.question(`my name is?`,name=> {
    sd.appendFileSync("person.txt",name)
})
