var fs = require('fs')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number ? ", function(number1) {
    rl.question("Enter second number ? ", function(number2) {
        function add(number1,number2)
        {
           res = `addition of two number is: ${parseInt(number1)+parseInt(number2)}`
           fs.appendFileSync('calc.txt',JSON.stringify(res))
        }
        function sub(number1,number2)
        {
           res = `sub of two number is: ${parseInt(number1)-parseInt(number2)}`
           fs.appendFileSync('calc.txt',JSON.stringify(res))
        }
        function division(number1,number2)
        {
           res = `sub of two number is: ${parseInt(number1)/parseInt(number2)}`
           fs.appendFileSync('calc.txt',JSON.stringify(res))
        }
        function multiplication(number1,number2)
        {
           res = `sub of two number is: ${parseInt(number1)*parseInt(number2)}`
           fs.appendFileSync('calc.txt',JSON.stringify(res))
        }
        console.log("1.Addition")
        console.log("2.Sub")
        console.log("3.division")
        console.log("4.multiplication")
        rl.question("enter choice:",function(ch) {     
        switch(ch)
        {
            case "1":
                console.log(ch)
                add(number1,number2)
                break;
            case "2":
                sub(number1,number2)
                break;
            case "3":
                division(number1,number2)
                break;
            case "4":
                multiplication(number1,number2)
                break;
            default:
            
                break;
            }
            rl.close();
        })
    });
});

