import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
    return (
        <>
       <div class="login-form">
    <form  method="post">
        <h2 class="text-center">GET IN TOUCH</h2>   
        <div class="form-group">
        	<div class="input-group">
                <div class="input-group-prepend">
                                       
                </div>
                <input type="text" className="form-control"  placeholder="Your Name" required="required"/>				
            </div>
        </div>
		<div class="form-group">
            <div class="input-group" >
                <div class="input-group-prepend">
                                       
                </div>
                <input type="password" className="form-control"  placeholder="Your Email" required="required"/>				
            </div>
        </div> 

         <div class="form-group">
        	<div class="input-group">
                <div class="input-group-prepend">
                                       
                </div>
                <input type="text"  className="form-control-contact"  placeholder="Message" required="required"/>				
            </div>
        </div>  
     
        <div class="form-group">
            <button type="submit" class="btn btn-primary login-btn btn-block">Send Message</button>
        </div>
      
    </form>
</div>
        </>
    )
}

export default Login
