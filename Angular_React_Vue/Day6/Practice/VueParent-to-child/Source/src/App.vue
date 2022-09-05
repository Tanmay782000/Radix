<template>
<div class="Example">
<ExampleApp/>
</div>
</template>

<script>
import ExampleApp from './components/ExampleApp.vue'

export default {
  name: 'App',
  components: {
    ExampleApp,
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
</style>
