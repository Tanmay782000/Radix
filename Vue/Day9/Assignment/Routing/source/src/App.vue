<template>
<div id="my"> 
 <div class="row">
  <div class="col-sm-4 text-center" id="first">
   <h1>B.tech Students</h1> 
   <div v-for="item in student" v-bind:key="item.id" id="my"> 
     <div class="card container h-25">
     <div class="card-body h-25">
     <img :src="item.profile" class="border border-2px" alt="table">
     <p><span class="text-danger">Id:</span><strong>{{item.id}}</strong></p>
     <p><span class="text-danger">Name:</span><strong>{{item.name}}</strong></p>
     <p><span class="text-danger">Department:</span><strong>{{item.department}}</strong></p>
     <p><span class="text-danger">Batch:</span><strong>{{item.batch}}</strong></p>
     <router-link :to="{ path: '/StudentDetails/'+item.id}" class="btn btn-primary">Show Details</router-link>
     </div>
     </div> 
 </div>
 </div>
 <div class="col-sm-8 text-center">
 <router-view></router-view>
 </div>
</div>
</div>
</template>

<script>

export default{
  name: 'App',
  data(){
    return{
      student: [{id:1,name:"Tanmay Mehta",department:"Information technology",batch:2019,profile:"https://cdn-icons-png.flaticon.com/512/3750/3750019.png"},
      {id:2,name:"Shivam Bhatt",department:"CSE",batch:2018,profile:"https://cdn-icons-png.flaticon.com/512/3750/3750032.png"},
      {id:3,name:"Smit Jaiswal",department:"Electrical",batch:2020,profile:"https://cdn-icons-png.flaticon.com/512/2784/2784488.png"}],
    }
  }
}
</script>

<style>
img{
  height:50%;
  width:50%;
}
#first{
  height:730px!important;
  overflow: auto;

}
.my{
  height: 400px!important;
}
</style>
