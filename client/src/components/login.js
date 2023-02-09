import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    
    let navigate = useNavigate();
    //create indivdual changing components
    const [credentials, setCredentials] = useState({email: "", password: ""});

    const handleSubmit = async(e) => {
        console.log(`Clicked`);
        e.preventDefault();

        const response = await fetch(`/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        
        const json = await response.json();
        console.log(json);

        if (json.success)
        {
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('email', credentials.email);
            navigate("/operations");
        }else{
            alert("invalid Type")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    return(
        <div>
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="textFormControlInput1" required={true}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="textFormControlInput1" required={true}></input>
                    </div>
                </form>
        </div>
    );
};

export default Login;