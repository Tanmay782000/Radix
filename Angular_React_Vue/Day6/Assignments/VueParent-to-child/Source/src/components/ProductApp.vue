<template>
<div>
    <input type="text" v-model="username">
    <input type="number" v-model="quantity">
    <input type="number" v-model="price">
    <button @click="getValue">click</button>
    <ProductList v-for="items in list" :key="items.id" :name="items.username" :quan="items.quantity" :price="items.price" :desc="items.discount"/>
</div>
</template>


<script>
import ProductList from './ProductList.vue'
export default{
    name:'ProductApp',
    data(){
        return{
            username:"",
            list: [],
            quantity:0,
            price:0,
            discount: 0
        };
    },
    components:{
        ProductList
    },
    methods:
    {
        getValue()
        {
        var res = (this.price - (this.price - this.discount)/100)   
        this.list.push({"username":this.username,"quantity":this.quantity,"price":this.price,"discount":res})
        }
    }
}    
</script>


<style>

</style>