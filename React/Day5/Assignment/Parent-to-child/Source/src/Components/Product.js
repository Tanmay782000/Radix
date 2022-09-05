import {React,useState} from 'react'
import ProductList from './ProductList';
function Product()
{
    let [pname,Pname] = useState(null)
    let [price,Price] = useState(null)
    let [quantity,Quantity] = useState(null)
    let [student, setStudent] = useState([]);
    var dis = 5
    var res = (price - (price - dis)/100)   
    return (
      <div>
        <label for="Productname">Enter ProductName:</label>
        <input type="text" onChange={(e)=>Pname(e.target.value)} /><br></br>
        <label for="Enter Price">Price:</label>
        <input type="number" onChange={(e)=>Price(e.target.value)} /><br></br>
        <label for="Enter Quantity">Quantity:</label>
        <input type="number" onChange={(e)=>Quantity(e.target.value)} /> <br></br>
        <button
          onClick={(e) =>
            setStudent((arr) => [
              ...arr,
              { FirstName: pname, LastName: price , Quantity:quantity, Discount:res},
            ])
          }
        >Click
        </button>
        <hr></hr>
        {
          
            student.map((e)=>{
                return (
                    <div>
                      <ProductList fname={e.FirstName} lname={e.LastName} quan={e.Quantity} disc={e.Discount}/>
                    </div>
                )
            })
        }
      </div>
    );
}

export default Product