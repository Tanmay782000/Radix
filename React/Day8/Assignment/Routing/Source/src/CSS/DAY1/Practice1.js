import React from "react";
import './cssfile/style1.css'
export default function Practice1()
{
    return(
        <div>
               <h3><u>#p1</u>Provide text alignment to center to student Report Card which is created in Day1 assignment</h3>
            <table aria-describedby="mytable" class="center">
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
    )
} 