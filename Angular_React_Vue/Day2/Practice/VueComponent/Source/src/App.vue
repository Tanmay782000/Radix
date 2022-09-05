<template>
  <A2Z />
</template>

<script>
import A2Z from './components/A2Z.vue'

export default {
  name: 'App',
  components: {
    A2Z,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: black;
}
</style>
