<template>
<div>
    <h1>FIND rectangle</h1>
    <input type="text" v-model="height">
    <input type="text" v-model="width">
    <button @click="demo">click</button>
    <p>{{ res }}</p>
</div>
</template>

<script>
export default{
    name:"rectangle",
    data(){
        return {
          height: "",
          width: "",
          res:"",
        };
    },
    methods:{
    demo(){
        this.res = parseInt(this.height) * parseInt(this.width)
    }
    }
}    


</script>

<style>

</style>