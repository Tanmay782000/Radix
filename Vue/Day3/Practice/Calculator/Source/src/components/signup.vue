<template>
    <div>
        <input type="text" v-model="Username">
        <input type="text" v-model="Password">
        <button @click="demo">click</button>
    </div>
</template>


<script>
    export default{
        name:'signup',
        props:{
            Username:String,
            Password:String
        },
        methods: {
          demo()
          {
           if(this.Username == "admin" && this.Password == "admin")
           {
               alert("valid username and password")
           }
           else
           {
               alert("wrong username and password")
           }
          }
    }}
</script>

<style>

</style>