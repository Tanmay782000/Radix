<template>
 <br><br>
 <div>
        <input type="text" v-model="name">
        <input type="text" v-model="address">
        <input type="text" v-model="pannumber">   
        <button @click="demo">submit</button>
        <p>Hello,m iy names {{name}},my address is {{address}} and pannumber is {{pannumber}}</p>
 </div>

</template>

<script>
    export default{
        name: "calc",
        data() {
        return{
            name: "",
            address: "",
            pannumber: "",
            res1: "",
            res2: "",
            res3: "",
       };
     },

        methods: {
            demo(){
            this.res1 = this.name
            this.res2 = this.address
            this.res3 = this.pannumber
            },
        }
    }
</script>

<style>

</style>