var fs = require('fs')
var Xclass = require('./rental')
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var ob = new Xclass.mobike()
rl.question("enter customer name:", function (name) {
  rl.question("enter phone number", function (phone_number) {
    rl.question("enter bike_number", function (bike_number) {
      rl.question("enter the days", function (days) {
        var arr1 = [{}]
        ob.customer_name = name
        ob.phone_number = phone_number
        ob.bike_number = bike_number
        ob.days = days
        ob.payment = ob.computed
        arr1.push(ob)
        arr1.forEach((e) => (
          console.log(arr1 = e)
        ))
        rl.close()
      })
    })
  })
})


