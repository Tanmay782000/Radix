<template>
<div class="mt-5">
    <h1>FIND rectangle</h1>
    <label for="height">Height</label>
    <input type="text" v-model="height"><br><br>
    <label for="width">Width</label>
    <input type="text" v-model="width"><br><br>
    <button @click="demo" class="btn btn-danger">click</button>
    <p>Area of Rectangle is:{{ res }}</p>
</div>
</template>

<script>
export default{
    name:"RectangleComp",
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