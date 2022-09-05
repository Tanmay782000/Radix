        import React from "react";
        import { Link } from "react-router-dom";
        import { Outlet } from 'react-router-dom';
        export default function Javascript(){
      
            return( 
            <div>
                <div class="row">
                    <div class="col-sm-3 bg-black">
                        <div class="content">
                         <ol class="text-danger">
                             <li><h4>Day1</h4>
                         <ul>  
                             <li><strong>Assignment</strong><ul><li>
                             <Link to="/JAVASCRIPT/Assignment">Assignment-1</Link></li></ul></li>
                             <li><strong>Practice</strong><ul>
                                <li><Link to="/JAVASCRIPT/Practice1">Practice-1</Link></li>
                                <li><Link to="/JAVASCRIPT/Practice2">Practice-2</Link></li>
                                <li><Link to="/JAVASCRIPT/Practice3">Practice-3</Link></li>
                                
                             </ul></li>
                          </ul></li>
                         </ol> 
                        </div>
                    </div>
        <div class="col-sm-9">
        
        <Outlet/>
        
            </div>
            </div>
            </div>
        )
        }