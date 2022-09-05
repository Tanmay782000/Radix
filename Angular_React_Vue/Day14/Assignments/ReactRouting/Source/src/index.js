import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Html from './HTML/DAY1/Html';
import reportWebVitals from './reportWebVitals';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Assignment from './HTML/DAY1/Assignment';
import Practice1 from './HTML/DAY1/Practice1';
import Practice2 from './HTML/DAY1/Practice2';
import Practice3 from './HTML/DAY1/Practice3';
import Practice4 from './HTML/DAY1/Practice4';
import Practice5 from './HTML/DAY1/Practice5';
import Assignment2 from './HTML/DAY1/Assignment2';
import Home from './Home';
import Assignment1 from './CSS/DAY1/Assignment1';
import Css from './CSS/DAY1/Css';
import CPractice1 from './CSS/DAY1/Practice1';
import CPractice2 from './CSS/DAY1/Practice2';
import CPractice3 from './CSS/DAY1/Practice3';
import CPractice4 from './CSS/DAY1/Practice4';
import CAssignment2 from './CSS/DAY1/Assignment2'
import Javascript from './JAVASCRIPT/DAY1/javascript';
import JAssignment1 from './JAVASCRIPT/DAY1/JAssignment1';
import JPractice1 from './JAVASCRIPT/DAY1/JPractice1';
import JPractice2 from './JAVASCRIPT/DAY1/JPractice2';
import JPractice3 from './JAVASCRIPT/DAY1/JPractice3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
 <Route path="/" element={<App/>}>
 <Route path="/" element={<Home/>}/>
 <Route path="/HTML" element={<Html/>}>
   <Route path="/HTML/Assignment" element={<Assignment/>}></Route>
   <Route path="/HTML/Practice1" element={<Practice1/>}></Route>
   <Route path="/HTML/Practice2" element={<Practice2/>}></Route>
   <Route path="/HTML/Practice3" element={<Practice3/>}></Route>
   <Route path="/HTML/Practice4" element={<Practice4/>}></Route>
   <Route path="/HTML/Practice5" element={<Practice5/>}></Route>
   <Route path="/HTML/Assignment2" element={<Assignment2/>}></Route>
 </Route>

 <Route path="/CSS" element={<Css/>}>
   <Route path="/CSS/Assignment" element={<Assignment1/>}></Route>
   <Route path="/CSS/Practice1" element={<CPractice1/>}></Route>  
   <Route path="/CSS/Practice2" element={<CPractice2/>}></Route>
   <Route path="/CSS/Practice3" element={<CPractice3/>}></Route>        
   <Route path="/CSS/Practice4" element={<CPractice4/>}></Route>  
   <Route path="/CSS/Assignment2" element={<CAssignment2/>}></Route>  
 </Route>

 <Route path="/JAVASCRIPT" element={<Javascript/>}>
 <Route path="/JAVASCRIPT/Assignment" element={<JAssignment1/>}></Route>
 <Route path="/JAVASCRIPT/Practice1" element={<JPractice1/>}></Route>
 <Route path="/JAVASCRIPT/Practice2" element={<JPractice2/>}></Route>
 <Route path="/JAVASCRIPT/Practice3" element={<JPractice3/>}></Route>
 </Route>

 </Route>
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
