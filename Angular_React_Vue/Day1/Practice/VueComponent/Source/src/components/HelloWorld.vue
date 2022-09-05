<template>
  <div id="div1">
    <h1>{{ reg }}</h1>
    <form class="mx-5 my-2">
      <div class="form-group">
        <label for="exampleInputEmail1">username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputcity">City</label>
        <input type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="form-group">
        <label for="text">State</label>
        <input type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">contact</label>
        <input type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
  </div>

  <div id="div2">
    <h1>{{ login }}</h1>
    <form class="mx-5 my-2">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "Tanmay",
      reg: "registration form",
      login: "login form",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#div1 {
  float: left;
  width: 50%;
  text-align: center;
}
body {
  background-color: aqua;
}
#div2 {
  float: right;
  text-align: center;
  width: 50%;
}

#div1 form {
  text-align: left;
  margin-left: 20px;
}
input[type="text"] {
  padding: 10px;
  margin-top: 30px;
}
input[type="password"] {
  padding: 10px;
  margin-top: 30px;
}

body {
  background-color: aquamarine;
}
</style>
