import React from "react";
export default function JPractice2(){
   var names = ['Vadodara ','Surat ','Ahmedabad ','Anand ','Dahod '];
var i = 0;
var len = names.length;
var text = "";
for(i=0;i<len;i++)
{
   text += "" + names[i] + "" ; 
}
document.getElementById("names").innerHTML = alert(text)
    return( 
        <div>
               <h1>Iterate names using for loop</h1>
               <p id="names"></p>
        </div>
    )
}