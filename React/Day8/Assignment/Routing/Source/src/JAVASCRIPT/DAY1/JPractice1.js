import React from "react";
export default function JPractice1(){

    return( 
        <div>
<div>
    <h1>Get answer form jscode throught id</h1>
    <p id="demo"></p>
    </div>
    <div>
    <h1>Using function</h1>
    <p id="demo2"></p>
    </div>
    <div>
        <h1>Using conditional statements</h1>
        <p id="demo3"></p>
        </div>
        <div>
            <h1>Using for loop</h1>
            <p id="demo4"></p>
            </div>
            <div>
                <h1>Using for loop2 without  mentioned data types</h1>
                <p id="demo5"></p>
                </div>
                <div>
                <h1>this keyword</h1>
                <p id="demo6"></p>
                <button Onclick={final}>show data</button>
                </div>        
                </div>
    )
function final()
{
var y = 10;
var x = 20;
var z = x + y; 

document.getElementById("demo").innerHTML = "addition is"+z;  

    var z = myFunction(4, 3);
    document.getElementById("demo2").innerHTML = "addition is"+z;
    function myFunction(a, b) {
      return a * b;
    }
  
       var a = 20;
       var b = 30;
       var c = 40;
       if(a>b){
          var compare = "a is greatest";
       }
       else if(b>c){
           var compare = "b is greatest";
       }
       else if(c>a){
           var compare = "c is greatest";
       }
       document.getElementById("demo3").innerHTML = compare;

    var txt = "";
    for(var i=0;i<=5;i++)
    {
        txt += "addition" + i + "<br>";
    }
    document.getElementById("demo4").innerHTML = txt
  
var  cars = ['alto','bmw','suzuki'];
   var i = 0;
   var len = cars.length;
   var txt = ""; 
     for(i=0;i<len;i++)
     {
       txt += "cars are:" + cars[i] + "<br>";
     }
     document.getElementById("demo5").innerHTML = txt;
 


       const list = {
           firstname : 'tanmay',
           lastname : 'mehta',
       };
       function myfunction(){
           return list.firstname;
       }
       document.getElementById("demo6").innerHTML = myfunction()
    }
}