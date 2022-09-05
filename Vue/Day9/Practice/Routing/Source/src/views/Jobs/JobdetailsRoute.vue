<template>
    <div>
        <h1>{{temp}}</h1>
        <div v-for="item in array2" v-bind:key="item.id">
          <ul>
            <li>{{item.childid}}</li>
               <li> {{item.address}}</li>
               <li>{{item.state}}</li> 
                <li>{{item.country}}</li>
          </ul>
         </div>
    </div>
</template>



<script>
export default{
    name:'JobdetailsRoute',
    data(){
        return{
      details:[{childid:1,address:"vadodara",state:"gujarat",country:"india"},
               {childid:2,address:"nagpur",state:"maharashtra",country:"india"}],  
        temp:this.$route.params.id, 
        };
    },
    computed:{
       array2() {
           return this.details.filter(a=>a.childid==this.temp)
        }
    }
     
}    
</script>


<style>


</style>