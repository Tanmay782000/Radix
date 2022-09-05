<template>
<div>
 <form @submit.prevent="submitform"> 
   <div>
  <label for="Field ID">FieldId:</label>
  <input type="number" v-model="fieldid">{{fieldid}}<br><br>
  <div v-if="v$.fieldid.$error">this field is required</div>
  </div>
  <label for="name">firstname:</label>
  <input type="text" v-model.trim.lazy="name.firstname">{{name.firstname}}<br><br>
  <label for="name">middlename:</label>
  <input type="text" v-model="name.middlename"><br><br>
  <label for="name">lastname:</label>
  <input type="text" v-model="name.lastname"><br><br>
  <label for="Address">Address:</label>
  <input type="text" v-model="address"><small>{{addressval}}</small><br><br>
  <button>submit</button><br><br>
 </form>
 <table border="2" aria-describedby="table">
 <tr>
 <th>Field Id</th>
 <th>firstname</th>
 <th>middlename</th>
 <th>lastname</th>
 <th>Address</th>
 </tr>
 <tr v-for="tm in newarr" v-bind:key="tm.id">
 <td>{{tm.fieldid1}}</td>
 <td>{{tm.name1}}</td>
 <td>{{tm.name2}}</td>
 <td>{{tm.name3}}</td>
 <td>{{tm.address1}}</td>
 </tr>
 </table>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'App',
    setup () {
    return { 
      v$: useVuelidate() 
    }
  },
  data(){
    return{
      fieldid:"",
      name:{firstname:"",middlename:"",lastname:""},
      address:"",
      newarr: [],
      idval:"",
      nameval:"",
      addressval:"",
      msg:""
    };
  },
  methods:{
    submitform()
    { 
    if(this.fieldid && this.name)
    { 
    this.newarr.push({fieldid1:this.fieldid,name1:this.name.firstname,name2:this.name.middlename,name3:this.name.lastname,address1:this.address})
    this.fieldid = "" 
    this.name.firstname = ""
    this.name.middlename = ""
    this.name.lastname = ""
    this.address = ""
    console.log(this.newarr)
    }
    },
    setName($event){
     this.fieldid = $event.target.value.toUpperCase()
    }
  },
  validations(){
    return{
        fieldid: {required}
    }
  }
}
</script>

<style>
small{
  color:red;
}
</style>
