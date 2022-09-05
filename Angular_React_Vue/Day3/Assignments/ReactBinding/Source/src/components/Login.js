import React,{useState} from "react";


function Login()
{
   const [val1,setData] = useState(null)
   const [val2,setData2] = useState(null)
   const [print,setPrint] = useState(false)
   function First(val){
       setData(val.target.value)
   }
   function Second(val1){
    setData2(val1.target.value)
   }
   function hello(my){
       if(val1 == "admin" && val2 == "admin")
       {
       alert("corrent username & password")
       }
       else
       {
        alert("invalid input")
       }
   }
   return(
       <div>
           <h1>Login Form</h1>
           <label for="username">Username</label>
           <input type="" onChange={First}/><br /><br />
           <label for="password">Password</label>
           <input type="" onChange={Second}/><br /><br />
           <button class="btn btn-primary" onClick={hello}>submit</button>
       </div>
   )
}

export default Login