var msg = "hello";
console.log(msg);
var c = 100;
var d = c.toString();
console.log(d);
var c = 100;
var d = c.toExponential();
console.log(d);
var num = undefined;
function hell() {
    console.log("bye");
}
var n = "tanmay";
var o = n.toUpperCase();
console.log(o);
//declared array as tuple
//declare data types of object parameter which we are going to pass
var emp;
emp = [[1, "tanmay", "mehta", "parvati nagar", 50000], [2, "shubh", "sheth", "prabhuli soc", 20000], [3, "harsh", "shah", "dipti soc", 10000], [4, "vir", "shah", "navlakhi soc", 25000], [5, "keyur", "patel", "gopal nagar", 40000]];
var emp2;
emp2 = [[6, "tanmay", "mehta", "parvati nagar", 50000], [7, "shubh", "sheth", "prabhuli soc", 20000], [8, "harsh", "shah", "dipti soc", 10000], [9, "vir", "shah", "navlakhi soc", 25000], [10, "keyur", "patel", "gopal nagar", 40000]];
//call the index value from outer list
console.log(emp[0]);
//call the index value from inner list
console.log("Id of employee is ".concat(emp[0][0], " \n\nFirstname of employee is ").concat(emp[0][1], " \n\nLastname of employee is ").concat(emp[0][2], " \n\nAddress of employee is ").concat(emp[0][3], " \n\nSalary of employee is ").concat(emp[0][4], " \n"));
//finding index by index value
var m = emp.concat(emp2);
console.log(m);
//get the particular items from b/w range 
var xd = emp.slice(1, 3);
var bt = xd.pop();
console.log(bt);
//concate the array values
