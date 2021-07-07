import React from 'react';
import { NavLink } from 'react-router-dom'



function Errorpage() {
    const mystyle = {
        color: "black",
        // backgroundColor: "#ffdc12",
        // textAlign: "center",
        padding: "200px",
        fontFamily: "sans-serif", 
        height: "100vh"
      };
    return (
        < >
            <div style={mystyle}>
                <h1>
                ERROR 404
                </h1>
                <p>PAGE NOT FOUND</p>

              
                <NavLink to="/">Back to Home Page</NavLink>

               
            </div>
            
         
        </>
    )
}

export default Errorpage
