function hello()
{
    console.log("hello");
}
function mymethod(a,b)
{ 
    var result = a + b
    setTimeout(()=> { 
        console.log(result)
    },1000)
}
mymethod(10,20)
hello()
var a = 20;
const myfunction = new Promise((resolve,reject)=> {
    if(a>10)
    {
        var msg = "appropriate op"
        resolve(msg)
    }
    else
    {
        var msg2 = "not appropriate"
        reject(msg2)
    }
})
const yourfun = () => {
myfunction .then(ok=>{ 
console.log(ok)})
.catch(cancle=>{console.log(cancle)})
}
yourfun()


const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  console.log('After')
  doSomething()


