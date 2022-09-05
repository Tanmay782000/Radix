<template>
    <nav>
    <ul>
     <li>Home</li>
     <li>About</li>
    </ul>
</nav>
</template>

<script>
    export default{
        name: 'Header',
    }
</script>

<style scoped>
nav{
    background-color: black;
}
ul{
    padding:10px;
    text-align: center;
}
ul li{
    color:white;
    display: inline;
    list-style: none;
    font-size: larger;
    margin-left: 10px;
}
</style>