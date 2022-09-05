import React from 'react'
import { Link } from 'react-router-dom'
import './assg.css'
export default function Assignment()
{
    return(

        <div class="my">
        <h1 class="text-warning">REGISTRATION FORM</h1>
        <form action="#" method="POST">
            <label for="name"><strong>Name:</strong></label><input type="text" name="name" placeholder="enter name" required/>
            <br></br>
            <label for="age"><strong>Age:</strong></label><input type="number" name="age" data-type="number" placeholder="enter age" required/>
            <br></br>
             <label><strong>Gender:</strong></label>
             <input type="radio" name="male" id="male"/>
             <label>Male</label>
             <input type="radio" name="female" id="female"/>
             <label>Female</label>
             <br></br>
             <label for="designation"><strong>Designation:</strong></label><input type="text" name="designation" placeholder="enter designation" required/>
             <br></br>
             <label for="salary"><strong>Salary:</strong></label><input type="number" name="salary" data-type="number" placeholder="enter salary" required/>
            <br></br>
             <label for="email"><strong>Email:</strong></label><input type="email" name="email" placeholder="enter email" required/>
             <br></br>
             <label for="Location">Location</label>
             <select name="Location" id="vadodara" required>
                 <option value="vadodara">vadodara</option>
                 <option value="surat">surat</option>
                 <option value="dahod">dahod</option>
                 <option value="anand">anand</option>
                 <option value="ahmedabad">ahmedabad</option>
                 <option value="rajkot">rajkot</option>
                 <option value="kuttch">kuttch</option>
            </select>
            <br></br>
            <label for="Contact"><strong>Contact:</strong></label><input type="tel" name="contact" placeholder="enter contact" required/>
             <br></br>
            <label for="date"><strong>DATE:</strong></label><input type="date" name="date" placeholder="enter date" required/>
             <br></br>
            <input type="submit" name="submit"/>
            </form>
        </div>
    )
}