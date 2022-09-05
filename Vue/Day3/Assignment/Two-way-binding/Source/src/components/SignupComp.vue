<template>
    <div class="mt-5 ml-4 container">
        <h1 class="">Login form</h1>
        <label class="ml-3" for="username">Username</label>
        <input type="text" class="ml-3" v-model="Username"><br>
        <label class="mt-3 ml-3" for="password">Password</label>
        <input type="text" class="ml-3" v-model="Password"><br>
        <button @click="demo" class="btn btn-danger mt-3 text-center mx-auto">click</button>
    </div>
</template>


<script>
    export default{
        name:'SignupComp',
        date(){
            return{
            Username:String,
            Password:String,
        };
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