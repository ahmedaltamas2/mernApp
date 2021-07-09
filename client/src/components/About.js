import React , {useEffect, useState }from 'react'
import { useHistory } from "react-router-dom";

function About() {

    const history = useHistory();
    const [userData,setUserData] = useState({});

    const callAboutPage = async () => {
        try{
            const res = await fetch ('http://localhost:5000/about',{
                method: "GET",
                headers: {
                    // Accept : "application/json",
                    // "Content-Type":"application/json"
                    'authorization':'Bearer '+sessionStorage.getItem('token')
    
                },
                // credentials:"include" 
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);


            if(!res.status === 200 ){
                window.alert("no data");
                console.log("no data");
            }
            

        }catch(err){
            console.log(err);
            history.push('/login');
           
        }
    }

    useEffect(() => {
       
        callAboutPage();
    }, []);




    return (
        <div>
            <form method="GET">
          <h2>About Me</h2>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
	
	<div className="carousel-inner">		
		<div className="carousel-item active">
			
			<p className="overview">
                <b>Name  :    {userData.name}</b> 
                <b>Phone Number  :    {userData.phone}</b>
                <b>Work  :    {userData.work}</b>          
                 </p>
			
		</div>
         </div> 
         </div>
         </form>
         </div>
    )
}

export default About
