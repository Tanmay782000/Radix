import React,{useState} from "react";

function Signup()
{
const [value1,setvalue] = useState(null)
const [value2,setvalue2] = useState(null)
const [value3,setvalue3] = useState(null)

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
function Data3(val)
{
    setvalue3(val.target.value)
    setPrint(false)
}
return(
    <div>
    <label for="Name">Name</label>
    <input type="text" onChange={Data1}/><br />
    <label for="Address">Address</label>
    <input type="text" onChange={Data2}/><br />
    <label for="PanNumber">PanNumber</label>
    <input type="text" onChange={Data3}/><br />
    <button onClick={()=>(setPrint(true))}>submit</button>
    {
            print? <div><p>hello my name is<strong> {value1} </strong>from<strong> {value2} </strong>and my PanNumber is<strong> {value3} </strong></p></div>
            : null
        }
    </div>
);
}

export default Signup