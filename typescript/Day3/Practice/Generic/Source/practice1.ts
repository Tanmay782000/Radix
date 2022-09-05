//using any data type
function identity(arg: any) 
{
    return arg;
}
  console.log(identity("tanmay"))
  console.log(identity(720))

//declare the type while declaring the function in <>
function example<T>(ar2:T):T{
return ar2
}
console.log(example<string>("TANMAY"))

//create an array using generic function 
function usingmap<T>(values:T){
return new Array(values)
}

var item12 = usingmap<any>(["tanmay","mehta","parul univesity"])
console.log(item12)