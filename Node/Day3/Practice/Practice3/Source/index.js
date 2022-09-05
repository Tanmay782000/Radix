require('dotenv').config();
const EventEmitter = require('events')
class world
{
  static name = "vadodara"
  static india(a,b)
  {
   return a+b
  }
}
console.log(world.india(20,20))
if(process.env.user_id == 720)
{
    console.log("success")
}
else{
    console.log("fail")
}
const event = new EventEmitter()
event.on('tanmay',function(arg){
    console.log("event emitted",arg)
});
event.emit('tanmay',{"id":720,"name":"TANMAY"});
