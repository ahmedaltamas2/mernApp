import React, {useState} from 'react'
import { NavLink , useHistory} from 'react-router-dom'
function Login() {


    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/signin",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               email,password
            })

        });

        const data = await res.json();
        console.log("login data",data);

        if(res.status === 400 || !data){
            window.alert("invalid ");
            console.log("invalid ");
        }else{
            window.alert("  Successfull");
            console.log("  Successfull ");
            sessionStorage.setItem('token', data.token);

            history.push("/about");
        }

    }



    return (

        

        <>
       <div className="login-form">
    <form  method="POST">
        <h2 className="text-center">Log in</h2>   
        <div className="form-group">
        	<div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="email" className="form-control" name="email" placeholder="email" required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>				
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" className="form-control" name="password" placeholder="Password" required="required"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>				
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" className="btn btn-primary login-btn btn-block" onClick={loginUser}>Log in</button>
        </div>
       
    </form>
    <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
</div>
        </>
    )
}

export default Login
