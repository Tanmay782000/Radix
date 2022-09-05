<template>
<div>
  <h1>Student Form</h1>
  <form @submit.prevent="submitform"> 
  <label for="Field ID">FieldId:</label>
  <input type="number" v-model="fieldid"><small>{{idval}}</small><br><br>
  <label for="name">Name:</label>
  <input type="text" v-model="name"><small>{{nameval}}</small><br><br>
  <label for="Address">Address:</label>
  <input type="text" v-model="address"><small>{{addressval}}</small><br><br>
  <button>submit</button><br><br>
 </form>
 <table border="2" aria-describedby="table">
 <tr>
 <th>Field Id</th>
 <th>Name</th>
 <th>Address</th>
 </tr>
 <tr v-for="tm in newarr" v-bind:key="tm.id">
 <td>{{tm.fieldid}}</td>
 <td>{{tm.name}}</td>
 <td>{{tm.address}}</td>
 </tr>
 </table>
 </div>
</template>
<script>


export default {
  name: 'App',
  data(){
    return{
      fieldid:"",
      name:"",
      address:"",
      newarr: [],
      idval:"",
      nameval:"",
      addressval:""
    };
  },
  methods:{
    submitform()
    {  
    if(this.fieldid == "")
    {
      this.idval = "enter field should not be empty"
    }
    else if(this.name == "")
    {
      this.nameval = "name field should not be empty"
    }
    else if(this.address == "")
    {
      this.addressval = "address field should not be empty"
    }
    else
    {
    this.newarr.push({"fieldid":this.fieldid,"name":this.name,"address":this.address,}) 
    console.log(this.newarr)
    }
    }
  }
}
</script>

<style>
small{
  color:red;
}
h1{
  text-align:center;
}
form{
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
table{
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
