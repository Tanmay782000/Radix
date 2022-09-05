let date1:Date = new Date("07-08-2021")
let date2:Date = new Date("03-06-2018")
let date3:Date = new Date("05-01-2019")
let date4:Date = new Date("01-05-2022")
let date5:Date = new Date("10-06-2021")
var drray: {id:number,name:string,city:string,date:any}[] = [
{'id':1,'name':'tanmay','city':'mumbai','date':date1},
{'id':2,'name':'vishwa','city':'surat','date':date2},
{'id':3,'name':'shubh','city':'anand','date':date3},
{'id':4,'name':'vishant','city':'mumbai','date':date4},
{'id':5,'name':'pruthvik','city':'navsari','date':date5},
]

//search employee by ID
console.log("search employee by ID");
console.log(drray.filter(user => user.id === 2))
//year>2020
console.log("Search the employees who has joined after year 2020")
console.log(drray.filter(user => user.date.getFullYear() > 2020))
//year>2020 && city === 'mumbai'
console.log("Search the employee who has joined after year 2020 and stays in Mumbai city")
console.log(drray.filter(user => user.date.getFullYear() > 2020 && user.city === 'mumbai'))
