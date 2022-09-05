<template>
<div>
    <input type="text" :name="username" v-model="username">
    <button @click="value">submit</button>
    <DisplayApp v-for="(index,items) in list" :key="items.id" :name="username"/>
</div>
</template>

<script>
import DisplayApp from './DisplayApp.vue'
export default {
  name: 'ExampleApp',
      data(){
          return{
          username:"",
          list: []
      };
  },
  components:{
     DisplayApp
  },
  methods:
  {
      value()
      {
         console.log(this.list.push(this.username))
      }
  }
}
</script>

<style>

</style>