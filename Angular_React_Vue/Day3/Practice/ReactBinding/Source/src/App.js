import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calc from './components/Calc.js';
import Login from './components/Login.js';
import Rectangle from './components/Rectangle.js';
import Signup from './components/Signup.js';
function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-sm-3 bg-danger">
       <Calc/>
        </div>
      <div class="col-sm-3">
      <Login/>
      </div>
      <div class="col-sm-3">
     <Rectangle/>
      </div>
      <div class="col-sm-3">
     <Signup />
     <div/>
    </div>
</div>
</div>
  );
}

export default App;
