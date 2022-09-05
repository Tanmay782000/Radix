<template>
    <div>
        <input type="text" v-model="Number1">
        <input type="text" v-model="Number2">
        <button @click="demo">submit</button>
        <p>{{res1}}</p>
        <p>{{res2}}</p>
        <p>{{res3}}</p>
    </div>
</template>

<script>
    export default{
        name: "calc",
        data() {
        return{
            Number1: "",
            Number2: "",
            res1: "",
            res2: "",
            res3: "",
       };
     },
        methods: {
            demo(){
            this.res1 = parseInt(this.Number1) + parseInt(this.Number2)
            this.res2 = parseInt(this.Number1) - parseInt(this.Number2)
            this.res3 = parseInt(this.Number1) / parseInt(this.Number2)
            },
        }
    }
</script>

<style>

</style>