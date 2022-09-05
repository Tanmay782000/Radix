import React from "react";
import './cssfile/style3.css'
export default function Practice3()
{
    return(
        <div>
               <h3><u>#3:-</u>Create city list in horizontal order(using display properties).</h3>
           <div id="mainOL">
            <ul>
                <li>Gujarat<ol>
                <li>vadodara</li>
                <li>surat</li>
                <li>anand</li>
                <li>dahod</li></ol>
            </li>
            </ul>
            <ul>
                <li>Maharastra<ol>
                <li>Nagpur</li>
                <li>Bombay</li>
                <li>kolhapur</li>
                <li>Ratnagiri</li></ol>
            </li>
            </ul>
        </div>
        </div>
    )
} 