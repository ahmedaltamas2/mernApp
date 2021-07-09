import React, {useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom'
const Signup = () => {

    const history = useHistory(); 

    const [user, setUser] = useState({
        name:"", email:"",phone:"", work:"",password:"",cpassword:""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
            e.preventDefault();

            const { name, email,phone,work, password,cpassword } = user;

            const res = await fetch("http://localhost:5000/register",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name,email,phone,work,password,cpassword
                })

            });

            const data = await res.json();

            if(res.status === 422 || !data){
                window.alert("invalid Registration");
                console.log("invalid Registration");
            }else{
                window.alert(" Registration Successfull");
                console.log(" Registration Successfull ");

                history.push("/login");
            }


    }




    return (
        <>
            <div className="signup-form">
                <form  method="POST">
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="name" placeholder="Name" required="required"
                        value = {user.name}
                        onChange= {handleInputs} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required"
                        value = {user.email}
                        onChange= {handleInputs} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="phone" placeholder="Phone Number" required="required"
                        value = {user.phone}
                        onChange= {handleInputs} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work" placeholder="Your Profession" required="required"  
                         value = {user.work}
                        onChange= {handleInputs} /> 
                    </div>
                </div>


                
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="password" placeholder="Password" required="required"
                        value = {user.password}
                        onChange= {handleInputs} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="cpassword" placeholder="Confirm Password" required="required"
                        value = {user.cpassword}
                        onChange= {handleInputs} />
                    </div>
                </div>
               
                <div className="form-group">
                    <input type="button" className="btn btn-primary btn-lg" onClick={PostData} value="Sign Up" />
                </div>
                </form>

                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

            </div>

        </>
    )
}

export default Signup
