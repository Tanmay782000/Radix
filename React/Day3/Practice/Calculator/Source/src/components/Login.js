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
           <label for="username">Username</label>
           <input type="" onChange={First}/><br />
           <label for="password">Password</label>
           <input type="" onChange={Second}/><br />
           <button onClick={hello}>submit</button>
       </div>
   )
}

export default Login