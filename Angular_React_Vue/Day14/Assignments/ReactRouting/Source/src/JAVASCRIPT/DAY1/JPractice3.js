import React from "react";
export default function JPractice3(){
    var number1 = prompt("Enter first number1:");
var number2 = prompt("Enter second number2:");
var number3 = prompt("Enter third number3:");
if(number1 > number2)
{
    document.write("<h1>number 1 is greatest:</h1>"+number1);
}
else if(number2 > number3)
 {
    document.write("<h1>number 2 is greatest:</h1>"+number2);
 }
 else if(number3 > number1)
 {
    document.write("<h1>number 3 is greatest:</h1>"+number3);
 }
 else{
     document.write("<h1>equal numbers not allowed</h1>");
 }
    
 var x = parseInt(number1);
 var y = parseInt(number2);
 var z = parseInt(number3);
 if(number1>40 && number2>40){
     var sum = x + y;
     document.write("<h1>sum is:</h1>"+sum);
 }
 else if(number2>40 && number3>40){
   var sum = y + z;
    document.write("<h1>sum is:</h1>"+sum);
 }
 else if(number3>40 && number1>40){
    var sum = z + x;
    document.write("<h1>sum is:</h1>"+sum);
 }
 else{
    document.write("<h1>All numbers are less then 40</h1>");
 }

    return( 
        <div>

        </div>
    )
}