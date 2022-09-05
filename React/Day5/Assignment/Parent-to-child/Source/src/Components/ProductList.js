import React from 'react'

function ProductList(props)
{
 return (
     <div>
          <p>Product Name: {props.fname}</p>
          <p>Price: {props.lname}</p>
          <p>Quantity: {props.quan}</p>
          <p>Discount:{props.disc}</p>
     </div>
 )
} 

export default ProductList