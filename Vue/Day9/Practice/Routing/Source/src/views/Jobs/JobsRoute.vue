<template>
    <div>
        <div v-for="tm in array" v-bind:key="tm.id">
               <ol><li><router-link :to="{ path: '/jobs/'+tm.id}" append>{{tm.id}}{{tm.name}}</router-link></li></ol>
        </div>
    </div>
</template>



<script>
export default{
    name:'JobsRoute',
    data(){
        return{
        array : [{"id":1,"name":"Ram"},{"id":2,"name":"Ramesh"}]
        }
    }
}    
</script>


<style>


</style>