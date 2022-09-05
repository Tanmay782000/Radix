const obj = require('./compute')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("enter length 1:",function(number1) { 
    rl.question("enter width 2:",function(number2) { 
        var obj2 = obj.area(number1,number2)
        console.log(`area of rectangle is:${obj2}`)
        var obj3 = obj.perimeter(number1,number2)
        console.log(`area of perimeter rectangle is:${obj3}`)
    rl.close()
    })
})