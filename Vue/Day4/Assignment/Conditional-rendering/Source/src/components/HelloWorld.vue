<template>
  <div class="hello">
    <div class="row container">
      <div class="col-sm-6">
        <h1>Add Employee</h1>
        <label for="employeeID">employeeID</label>
        <input type="number" v-model="employeeId"><br><br>
        <label for="name">Name</label>
        <input type="text" v-model="name"><br><br>
        <label for="address">Address</label>
        <input type="text" v-model="address"><br><br>
        <label for="date">Date</label>
        <input type="date" v-model="date"><br><br>
        <label for="gender">Gender</label>
        <select v-model="gender">
        <option value="male">male</option>
        <option value="female">female</option>           
        <option value="other">other</option>
         </select><br><br>
         <label for="hobbie">Hobbie</label>
         <input type="text" v-model="hobbie">
        <button @click = "first" class="btn btn-danger">submit</button>
        </div>
        <div class="col-sm-6">
          <h1>Show Data</h1>
        <table class="table table-stripped" aria-describedby="table">
         <tr>
           <th>emp</th>
           <th>name</th>
           <th>add</th>
           <th>date</th>
           <th>gender</th>
           <th>hobbie</th>
         </tr>
          <tr v-for="user in arr" :key="user.id">
          <template v-if="first">
           <td>{{user.employeeId}}</td>
           <td>{{user.name}}</td>
           <td>{{user.address}}</td>
            <td>{{user.date}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.hobbie}}</td>
           </template>
           <template v-else>
           <td>{{user.employeeId}}</td>
           <td>{{user.name}}</td>
           <td>{{user.address}}</td>
            <td>{{user.date}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.hobbie}}</td>
           </template>
         </tr>
        </table>
        <button @click = "finalsort"  class="btn btn-danger">sort</button>
        </div>
   </div>
  </div>
 </template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      employeeId:'',
      name:'',
      address:'',
      gender:'',
      hobbie: '',
      date: '',
      ndate: '',
       arr: []
    };
  },
  methods:{
     first()
     {
        this.arr.push({"employeeId":this.employeeId,"name":this.name,"address":this.address,"date":this.date,"gender":this.gender,"hobbie":this.hobbie})
     },
    finalsort()
     { 
       var s = new Date(this.date)
       this.ndate = s.getMonth()
       this.newarr = this.arr.sort((a,b)=>(a.name > b.name) ? 1 : -1)
       this.arr = this.newarr
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.green{
  background-color: aqua;
}
.red{
  background-color: blueviolet;
}
</style>
