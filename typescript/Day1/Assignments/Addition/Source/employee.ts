let array1: { id: number, name: string ,lastname:string,address:string,salary:number }[] = [
    { "id": 1, "name": "Tanmay" , "lastname":"mehta" , "address":"parvatinagar vadodara gujarat","salary":100000},
    { "id": 2, "name": "Shubh" , "lastname":"sheth" , "address":"kalpananagar surat gujrat","salary":10000},
    { "id": 3, "name": "Milan" , "lastname":"pandya" , "address":"gopalnagar mewad rajasthan ","salary":50000},
    { "id": 4, "name": "shiv" , "lastname":"sharma" , "address":"alkanagar nagpur maharashtra","salary":40000},
    { "id": 5, "name": "dev" , "lastname":"parmar" , "address":"shantanu chinachawk dehli","salary":60000},
];

var dm = array1.push({"id": 6, "name": "vir" , "lastname":"zara" , "address":"anand nagar","salary":6000})
console.log(array1)
//find by index value
console.log("find by item value")
var ms = array1.filter(item => item.name === "Tanmay");
console.log(ms)
//find by index
console.log("find by index")
console.log(array1[2])
//pop the element from an array
console.log("pop an element from array")
var p = array1.pop()
console.log(p)
let array2: { id: number, name: string ,lastname:string,address:string,salary:number }[] = [
    { "id": 6, "name": "Tanmay" , "lastname":"mehta" , "address":"parvatinagar koimbatur tamilnadu","salary":100000},
    { "id": 7, "name": "vishwa" , "lastname":"shah" , "address":"kalpananagar panji goa","salary":10000},
    { "id": 8, "name": "Milan" , "lastname":"pandya" , "address":"gopalnagar andheriest mumbai","salary":50000},
    { "id": 9, "name": "shiv" , "lastname":"sharma" , "address":"alkanagar bhopal madhyapradesh","salary":40000},
    { "id": 10, "name": "dev" , "lastname":"parmar" , "address":"shantanu raipur chattisgadh","salary":60000},
];

var botharrays = array1.concat(array2)

let array3 = botharrays.map((user)=>{
    return {id:user.id , full_name:(user.name.concat(user.lastname)) , address:(user.address).split(" ") ,salary: (user.salary) - 2500}
})
console.log(array3)


