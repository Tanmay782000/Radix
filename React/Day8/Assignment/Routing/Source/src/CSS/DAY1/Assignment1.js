import React from 'react'
import './assg1.css'
import img from './photos/img.jfif'
export default function Assignment1(){
    return (
        <div>
             <header>
                <img src={img} alt="photo" id="assgimg"/>
                <nav>
                   <ul>
                   <li><a href="#">HOME</a></li>
                   <li><a href="#">ABOUT US</a></li>
                   <li><a href="#">CONTACT US</a></li>
                </ul></nav>
                </header>
                <main>
                 <div class="sidebar">
                     <p>Always display the navigation pane to the left of the page content
                        Use a collapsible, "fully automatic" responsive side navigation
                        Open navigation pane over the left part of the page content
                        Open navigation pane over all of the page content
                        Slide the page content to the right when opening the navigation pane
                        Display the navigation pane on the right side instead of the left side</p>
                 </div>
                  <div class="content">
                      <article> 
                        <h1>Times of India</h1>
                        <p>Note: If a !DOCTYPE is not specified, floating items can produce unexpected results.
            
                            A background color is added to the links to show the link area. The whole link area is clickable, not just the text.
                            
                            Note: overflow:hidden is added to the ul element to prevent li elements from going outside of the list.</p>
                      </article>
                  </div>
                </main>           
                <footer>
                 <h3>footer</h3>    
                </footer>
        </div>
    )
}