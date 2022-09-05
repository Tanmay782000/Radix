import React from 'react'
import './assg.css'
export default function Practice3(){
    return( 
        <div>
               <div class="my">
                    <h1 class="text-warning text-center">LOGIN FORM</h1>
                    <form>
                    <label for="Username"><strong>Username</strong></label>&nbsp;<input type="text" name="username" placeholder="enter username"/>
                    <br></br>
                    <label for="Password"><strong>Password</strong></label>&nbsp;<input type="password" name="password" placeholder="enter password"/>
                    <br></br>
                    <input type="submit" class="mt-3" value="LOGIN"/>
                    </form>
                    </div>
        </div>
    )
}