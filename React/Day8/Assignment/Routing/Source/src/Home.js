import React from "react";
import logo from './HTML/DAY1/photos/logo.png'
import { Link,Outlet } from "react-router-dom";
import './App.css'
export default function Home(){
    return ( 
    <div>
    <div className="App">
            <div id="ttm">
            <img src={logo} id="logo"/>        
        </div>
    </div>
    </div>
    )
}