import React,{useState} from 'react'


function Calc()
{
const [data1,setData1] = useState(null)
const [data2,setData2] = useState(null)
const [print,setPrint] = useState(false)
function getData2(val1){
    setData2(val1.target.value)
    setPrint(false)
    console.warn(val1.target.value)
}

function getData1(val){
    setData1(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
}

return (
<div>    
<h1>Calculator</h1>
<label for="value1">Va lue1</label>    
<input type="text" onChange={getData1}/><br/>
<label for="value2">Value2</label>
<input type="text" onChange={getData2}/><br/>   
<button class="btn btn-warning mx-auto text-center" onClick={()=>setPrint(true)}>Print</button>
{
    print?
    <div>
    <h1>Addition is:{parseInt(data1) + parseInt(data2)}</h1>
    <h1>Division is:{parseInt(data1) / parseInt(data2)}</h1>
    <h1>Substraction is:{parseInt(data1) - parseInt(data2)}</h1>
    </div>
    :null
}
</div>
);
}

export default Calc