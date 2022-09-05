<template>
 <div>
        <h1>Signup form</h1>
        <label for="name">Name</label>
        <input type="text" v-model="name"><br><br>
        <label for="address">Address</label>
        <input type="text" v-model="address"><br><br>
        <label for="pannumber">PanNumber</label>
        <input type="text" v-model="pannumber"><br><br>   
        <button @click="demo" class="btn btn-danger">submit</button>
        <p>Hello,m iy names {{name}},my address is {{address}} and pannumber is {{pannumber}}</p>
 </div>
</template>

<script>
    export default{
        name: "LoginComp",
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