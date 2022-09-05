import './App.css';
import logo from './HTML/DAY1/photos/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import useCollapse from 'react-collapsed';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
function App() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="App">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark ms-auto">
        <div class="container text-center">
  <Link to="/" class="navbar-brand" href="#">logo</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
        <Link to="/" class="nav-link text-white">HOME</Link>
      </li>
      <li class="nav-item">
        <Link to="/HTML" class="nav-link text-white">HTML</Link>
      </li>
      <li class="nav-item">
        <Link to="/CSS" class="nav-link text-white" href="#">CSS</Link>
      </li>
      <li class="nav-item">
        <Link to="/JAVASCRIPT" class="nav-link text-white" href="#">JAVASCRIPT</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
<div class="row">
   <Outlet/>
</div>
</div>
  );
}
export default App;
