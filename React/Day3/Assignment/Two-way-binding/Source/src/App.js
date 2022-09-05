import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.js';
import Rectangle from './components/Rectangle.js';
import Signup from './components/Signup.js';
function App() {
  return (
    <div className="App bg-secondary">
      <div class="row container">
      <div class="col-sm-4 mt-5 mx-auto">
      <Login/>
      </div>
      <div class="col-sm-4 mt-5 mx-auto">
     <Rectangle/>
      </div>
      <div class="col-sm-4 mt-5 mx-auto">
     <Signup />
     <div/>
    </div>
</div>
</div>
  );
}

export default App;
