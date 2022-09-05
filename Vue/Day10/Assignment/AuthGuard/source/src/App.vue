<template>
<div id="app">
 <router-link to="/HomeIn">Home</router-link>
 <router-link to="/LogIn">Login</router-link>
<div>
<router-view></router-view>
</div>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
}
</script>

<style>

</style>
