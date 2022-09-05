<template>
<div>
  <signup/>
  <calc/>
  <rectangle/>
  <login/>
  </div>
</template>

<script>
import calc from './components/calc.vue'
import rectangle from './components/rectangle.vue'
import signup from './components/signup.vue'
import login from './components/login.vue'
export default {
  name: 'App',
  components: {
    calc,
    rectangle,
    signup,
    login,
 }
}
</script>

<style>

</style>
