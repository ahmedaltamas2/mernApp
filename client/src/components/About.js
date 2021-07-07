import React from 'react'
import dp from '../images/dp.jpg';

function About() {
    return (
        <div>
          <h2>About Me</h2>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	
	

	<div class="carousel-inner">		
		<div class="carousel-item active">
			<div class="img-box"><img src={dp} alt=""/></div>
			<p class="testimonial">I am a B.tech IT student at NSUT WEST CAMPUS.I completed my 12th from HHFS New Delhi</p>
			<p class="overview"><b>Altamas Ahmed</b> MERN developer <a href="#"></a></p>
			
		</div>
         </div> 
         </div>
         </div>
    )
}

export default About
