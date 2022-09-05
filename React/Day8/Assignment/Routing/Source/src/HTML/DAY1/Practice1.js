import React from "react";
import './assg.css'
export default function Practice1(){
    return(

        <div>
            
            <h1 class="text-warning text-center">Department</h1>

            <div class="my">
              <table aria-describedby="mytable">
              <tr> 
              <th rowspan="2">Name</th>
              <th rowspan="2">RollNo</th>
              <th rowspan="2">Year of passing</th>
              <th colspan="3">Subject & Marks</th>
              <th rowspan="2">Grade</th>
              </tr>
              <tr>
              <td>Data structure</td>
              <td>Web programing</td>
              <td>Advance C</td>
              </tr>
              <tr>
               <td>TANMAY</td>
               <td>720</td>
               <td>2022</td>
               <td>45</td>
               <td>47</td>
               <td>45</td>
               <td>A+</td>
              </tr>
              <tr>
               <td>Shiv</td>
               <td>721</td>
               <td>2022</td>
               <td>40</td>
               <td>42</td>
               <td>39</td>
               <td>A</td>
              </tr>
              <tr>
               <td>Vishwa</td>
               <td>722</td>
               <td>2022</td>
               <td>43</td>
               <td>36</td>
               <td>35</td>
               <td>B</td>
              </tr>
              <tr>
               <td>Shubh</td>
               <td>723</td>
               <td>2022</td>
               <td>45</td>
               <td>47</td>
               <td>45</td>
               <td>A+</td>
              </tr>
              <tr>
               <td>Roham</td>
               <td>724</td>
               <td>2022</td>
               <td>33</td>
               <td>36</td>
               <td>45</td>
               <td>B+</td>
              </tr>
              <tr>
               <td>Harsh</td>
               <td>725</td>
               <td>2022</td>
               <td>30</td>
               <td>26</td>
               <td>32</td>
               <td>C</td>
              </tr>
              </table>
              </div>

        </div>
    )
}