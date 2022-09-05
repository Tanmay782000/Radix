const mongoose = require('mongoose')
const Fawn = require("fawn")
Fawn.init("mongodb://localhost:27017/practice6")
var task = Fawn.Task();
task.update("Accounts", {firstName: "John", lastName: "Smith"}, {$inc: {balance: +10}})
  .update("Accounts", {firstName: "Broke", lastName: "albert"}, {$inc: {balance: -10}})
  .run()
  .then(function(results){

    
  })
  .catch(function(err){
    // Everything has been rolled back.
    
    // log the error which caused the failure
    console.log(err);
  });



  