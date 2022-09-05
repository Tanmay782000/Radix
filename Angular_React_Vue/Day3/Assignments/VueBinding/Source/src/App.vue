<template>
  <div id="app">
    <div class="row">
       <div class="col-sm-4">
         <SignupComp/>
       </div>
       <div class="col-sm-4">
    <RectangleComp/>
       </div>
       <div class="col-sm-4">
    <LoginComp/>
       </div>
    </div>
  </div>
</template>

<script>
import LoginComp from './components/LoginComp.vue'
import RectangleComp from './components/RectangleComp.vue'
import SignupComp from './components/SignupComp.vue'

export default {
  name: 'App',
  components: {
    SignupComp,
    RectangleComp,
    LoginComp,
  }
}
</script>

<style>

</style>
