import React from 'react'
import './assg2.css'
import pic from './photos/profile.jpg'
export default function Assignment2()
{
        return ( 
        <div>
            <h1 class="text-center text-warning">RESUME</h1>
            <hr class="mx-auto"/>
            <table aria-describedby="mytable" class="center">
              <tr>
                <th colspan="2"><h3>FRESHER'S RESUME</h3></th>
              </tr>
              <tr>
                <td>TANMAY MEHTA</td>
                <td rowspan="4"><img src={pic} height="100px" width="100px" alt="img2"/></td>
              </tr>
              <tr>
                <td>35,Parvatinagar soc,Harniroad,Vadodara,Gujarat,390022</td>
              </tr>
              <tr>
                <td>Contact No.-(+91)3472838492</td>
              </tr>
              <tr>
               <td>Email id:- <a href="#">mehtatanmay11@gmail.com</a></td>
              </tr>
            </table>
        
        
            <hr class="mx-auto"/>
            <table aria-describedby="mytable2" class="center">
             <tr class="color1">
               <th scope="col" colspan="6">Education qualifications</th>
             </tr>
             <tr class="color0">
               <th scope="col">Education</th>
               <th scope="col">Course</th>
               <th scope="col">School/Collage/University</th>
               <th scope="col">Passing year</th>
               <th scope="col">percentage</th>
             </tr> 
             <tr>
               <td>Post Graduation</td>
               <td>M.Tech</td>
               <td>IIT</td>
               <td>2022</td>
               <td>70%</td>
             </tr>
             <tr>
               <td>Graduation</td>
               <td>B.Tech</td>
               <td>PARUL UNIVERSITY</td>
               <td>2020</td>
               <td>82%</td>
             </tr>
             <tr>
              <td>Higher Secondary(12th)</td>
              <td>Science</td>
              <td>Jai Ambe Vidhyalaya</td>
              <td>2017</td>
              <td>88%</td>
            </tr>
            <tr>
              <td>Higher School(10th)</td>
              <td>-</td>
              <td>Jai Ambe Vidhyalaya</td>
              <td>2015</td>
              <td>89%</td>
            </tr>
            </table>
            <br/>
        
        
            <table aria-describedby="mytable3" class="center">
            <tr class="color2">
              <th scope="col" colspan="2">Skills</th>
            </tr>
            <tr>
              <td><strong>Web development:-</strong></td>
              <td>html,css,javascript,python,c,php,sql,java,bootstrap.</td>
            </tr>
            <tr>
              <td><strong>Frameworks:-</strong></td>
              <td>Django,Laravel,.net MVC.</td>
            </tr>
            <tr>
              <td><strong>Operating system:-</strong></td>
              <td>WindowsXP/7/8/10/11,Linux,IOS.</td>
            </tr> 
            </table>
            <br/>
        
            <table aria-describedby="mytable4" class="center">
              <tr class="color3">
                <th scope="col" colspan="2">Project done.</th>
              </tr>
              <tr>
                <th scope="col">definition</th>
                <th scope="col">video</th>
              </tr>
              <tr>
                <td>1)Vehicle Allocation System
                <ul>
                  <li>
                  employee request to admin for booking
                  car.if reason is<br/> valid then admin allot
                  the car & driver to employee<br/> 
                  </li>
                </ul>
              </td>
                <td>
                  <video width="290px" height="150px" controls>
                    <source src="videos/video1.mp4" type="video/mp4"/>
                    <track label="English" kind="captions" srclang="en" src="resources/myvideo-en.vtt" default/>
                    <track label="Deutsch" kind="captions" srclang="de" src="resources/myvideo-de.vtt"/>
                    <track label="Español" kind="captions" srclang="es" src="resources/myvideo-es.vtt"/>
                  </video>
                </td>
              </tr>
              <tr>
                <td><u>2)A2Z AbodeStuff</u>
                <ul>
                  <li>
                  This webapplication works as an interface and allow the service provider to contact to the customes & provides the household services. <br/>
                  </li>
                </ul>
                </td>
                <td>
                  <video width="300px" height="150px" autoplay loop>
                    <source src="videos/video2.mp4" type="video/mp4"/>   
                    <track label="English" kind="captions" srclang="en" src="resources/myvideo-en.vtt" default/>
                    <track label="Deutsch" kind="captions" srclang="de" src="resources/myvideo-de.vtt"/>
                    <track label="Español" kind="captions" srclang="es" src="resources/myvideo-es.vtt"/>
                  </video>
                </td>
              </tr>
              </table>
              <br/>
        
        
              <table aria-describedby="mytable" class="center">
                <tr class="color4">
                  <th scope="col">Area of specialization.</th>
                </tr>
                <tr>
                <td>
                  <ol>
                    <li>
                    Diploma(diploma in Information & Technology) 
                    </li>
                    <li>
                    B.tech(Btech in Information & Technology) 
                    </li>
                  </ol>
                  </td>
             </tr>
             </table>
        </div>
    )
}