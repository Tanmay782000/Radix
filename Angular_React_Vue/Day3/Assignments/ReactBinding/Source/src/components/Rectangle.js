import React,{useState} from "react";

function Rectangle()
{
const [value1,setvalue] = useState(null)
const [value2,setvalue2] = useState(null)
const [print,setPrint] = useState(false)
function Data1(val)
{
  setvalue(val.target.value)
  setPrint(false)
}
function Data2(val)
{
    setvalue2(val.target.value)
    setPrint(false)
}
return(
    <div>
    <h1>Area of Rectangle</h1>
    <label for="Length">Length</label>
    <input type="text" onChange={Data1}/><br /><br />
    <label for="Height">Height</label>
    <input type="text" onChange={Data2}/><br /><br />
    <button class="btn btn-danger" onClick={()=>(setPrint(true))}>submit</button>
    {
       print? 
       <h1>{value1 * value2}</h1>
       :null 
    }
    </div>
);
}

export default Rectangle