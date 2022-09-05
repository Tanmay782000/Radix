interface salary{
month:any,
salary:any,
employeeID:any    
}
interface employee{
    first_name:string,
    last_name:string,
    address:string,
    DOJ:any,
    email:string,
    gender:gender3,
}
type bothinterfaces = employee & salary
enum gender3{
    male = "male",
    female = "female",
}

var date1:Date = new Date("04-16-2022")
var date2:Date = new Date("04-07-2022")
var date3:Date = new Date("09-11-2020")
var date4:Date = new Date("11-12-2018")
var date5:Date = new Date("03-08-2017")
var res : bothinterfaces[] = [
{
    'first_name':'tanmay',
    'last_name':'mehta',
    'address':'vadodara',
    'DOJ':date1,
    'email':'tanmay@gmail.com',
    'gender':gender3.male,
    'month':2020,
    'salary':100000,
    'employeeID':11,
},
{
    'first_name':'vishwa',
    'last_name':'shah',
    'address':'surat',
    'DOJ':date2,
    'email':'vishwa@gmail.com',
    'gender':gender3.female,
    'month':2019,
    'salary':50000,
    'employeeID':12,
},
{
    'first_name':'shubh',
    'last_name':'sheth',
    'address':'anand',
    'DOJ':date3,
    'email':'anand@gmail.com',
    'gender':gender3.male,
    'month':2021,
    'salary':40000,
    'employeeID':13,
},
{
    'first_name':'hritik',
    'last_name':'roshan',
    'address':'mumbai',
    'DOJ':date4,
    'email':'hritik@gmail.com',
    'gender':gender3.male,
    'month':2018,
    'salary':4000,
    'employeeID':14,
},
{
    'first_name':'rahul',
    'last_name':'gandhi',
    'address':'dehli',
    'DOJ':date5,
    'email':'rahul@gmail.com',
    'gender':gender3.male,
    'month':2018,
    'salary':400,
    'employeeID':15,
}
];
//here I make new array using map (iterated over the array which is store in res)
//And also add the new field called employeecode(joiningyear + firstname + lastname[0])
var d = res.map((usg)=>{
    return {first_name:usg.first_name,last_name:usg.last_name,address:usg.address,DOJ:usg.DOJ,email:usg.email,gender:usg.gender,month:usg.month,salary:usg.salary,employeeID:usg.employeeID,   
    employee_code:usg.DOJ.getFullYear()+usg.first_name+usg.last_name[0]}
})
var mynew = d.sort((a,b)=>(a.first_name < b.first_name && a.DOJ.getFullYear() < b.DOJ.getFullYear())? -1 : 1); 
//console.log(mynew)
var recordfilter = d.filter(user => user.DOJ.getMonth() === 04 - 1 )
//console.log(recordfilter)

//
console.log("after implementing intersection operation on salary & employee , Add the employee_code field , add enum for gender,add mr & mrs,concat the firstname and lastname and make new field called first name,find the average of salary")
var updatedarray = d.map((usg)=>{
    var mr:string = "mr."
    var ms:string = "ms."
    if(usg.gender === 'male'){
    return {
    full_name:mr+(usg.first_name.concat(usg.last_name)),address:usg.address,DOJ:usg.DOJ,email:usg.email,gender:usg.gender,month:usg.month,salary:usg.salary,employeeID:usg.employeeID,   
    employee_code:usg.DOJ.getFullYear()+usg.first_name+usg.last_name[0]}
    }
    if(usg.gender === 'female')
    {
    return {
    full_name:ms+(usg.first_name.concat(usg.last_name)),address:usg.address,DOJ:usg.DOJ,email:usg.email,gender:usg.gender,month:usg.month,salary:usg.salary,employeeID:usg.employeeID,   
    employee_code:usg.DOJ.getFullYear()+usg.first_name+usg.last_name[0]}
    }
})
console.log(updatedarray)



console.log("find the average of salary")

var f = d.forEach(a => {
   console.log(a.salary)
});
console.log("----------------------------------")

let s1 = 0;
let s2 = 0;
const len = d.length;
let item = null;
for (let i = 0; i < len; i++) {
    item = d[i];
    if (item.salary) {
        s1 = item.salary + s1;
        s2 = s2 + 1;
    }
}
const result = s1 / s2;
console.log(result);