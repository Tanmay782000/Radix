<template>
<div>

  <ul>       
      <li>ProductName:{{name}}</li>
      <li>Quantity:{{quan}}</li>
      <li>Price:{{price}}</li>
      <li>Computed Amount:{{desc}}</li>
    </ul>
</div>
</template>


<script>
export default{
    name:"ProductList",
    props:{
       name:String,
       quan:Number,
       price:Number,
       desc:Number
    }
}    
</script>

<style>

</style>