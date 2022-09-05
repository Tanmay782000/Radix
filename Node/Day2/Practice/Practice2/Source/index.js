var fs = require('fs')
const { count } = require('console')

fs.appendFileSync('person.txt',"hello India")
var msg2 = fs.readFileSync('person.txt','utf-8')
console.log(msg2)

file1 = fs.readFileSync("file1.txt","utf-8")
file2 = fs.readFileSync("file2.txt","utf-8")

async function promise()
{
const res = await this.file1
console.log(res)
const res2 = await this.file2
console.log(res2)
}
async function consonant()
{
    str = fs.readFileSync("alphabats.txt","utf-8")

    const consonants = str.match(/[^aeiou]/gi);
   var count = 0 
    for(i=0;i<consonants.length;i++)
    {
       count++
    }
    console.log(count)
}

async function paste()
{
    var oldpath = "person.txt"
    var newpath = "paste/pasteperson.txt"
    var md = fs.renameSync(newpath,oldpath)
    console.log(md)
} 

promise()
consonant()
paste()