<template>
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="username">
      <label for="password">Password:</label>
      <input type="text" v-model="password">
      <button ></button>
    </div>
</template>

<script>
export default{
name:"LogIn",
data(){
    return{
        username:"",
        password:""
    }
},
computed:{
        get()
        {
        return localStorage.setItem("username","admin")
    }
}
}
</script>

<style>

</style>