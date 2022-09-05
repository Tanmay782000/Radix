var y = 10;
var x = 20;
var z = x + y; 
document.getElementById("demo").innerHTML = "addition is"+z;  

    var z = myFunction(4, 3);
    document.getElementById("demo2").innerHTML = "addtion is:"+z;
    function myFunction(a, b) {
      return a * b;
    }
  
       var a = 20;
       var b = 30;
       var c = 40;
       if(a>b){
           compare = "a is greatest";
       }
       else if(b>c){
           compare = "b is greatest";
       }
       else if(c>a){
           compare = "c is greatest";
       }
       document.getElementById("demo3").innerHTML = compare;

    var txt = "";
    for(var i=0;i<=5;i++)
    {
        txt += "addition" + i + "<br>";
    }
    document.getElementById("demo4").innerHTML = txt
  
   cars = ['alto','bmw','suzuki'];
   i = 0;
   len = cars.length;
   txt = ""; 
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
