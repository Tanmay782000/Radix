import logo from './logo.svg';
import './App.css';
var hello = "Hello World How I am"
var username = "Tanmay"
var password = "------"
var city = "Vadodara"
var state = "Gujarat"
var contact_no = "72638472837"
function App() {
  return (
    <div className="App">
  <div id="div1">
 <h1>Registration Form</h1>
 <form class="mx-5 my-2">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={username}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder={password}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputcity">City</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder={city}></input>
  </div>
  <div class="form-group">
    <label for="text">State</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder={state}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">contact</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder={contact_no}></input>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>
</div>

<div id="div2">
 <h1>Login page</h1>
 <form class="mx-5 my-2">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={username}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder={password}></input>
  </div>
 
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>
</div>

    </div>

  );
}

export default App;
