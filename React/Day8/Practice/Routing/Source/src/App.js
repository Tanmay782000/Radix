import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'
import About from './About'
function App() {
  return (
  <div>
    <div className="App">
     <Link to="">Home</Link>
     <Link to="/one">One</Link>
     <Link to="/about">About</Link>
    </div>
    <div>
      <Outlet />
    </div>
  </div>  
  );
}

export default App;
