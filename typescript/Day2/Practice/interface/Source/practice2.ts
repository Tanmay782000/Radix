console.log("DAY-2 PRACTICE-2")
interface hell{
  label : string
  content : string
}
function hello(tempobj : hell){
  console.log(tempobj.label,tempobj.content)
}
let res = {label:"Name",content:"Tanmay"}
hello(res)



interface my{
  product : string
  price? : 40 // make call optional
}
function good(myob : my){
  console.log(myob.product)
}
var m = {product:"Laptops"}
good(m)