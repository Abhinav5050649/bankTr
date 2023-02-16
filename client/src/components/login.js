import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        console.log(`Clicked`);
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"email": email, "password": password})
        })
        
        const j = await response.json();

        console.log(j.success);
        if (j.success)
        {
            localStorage.setItem('token', j.authtoken) 
            localStorage.setItem('email', email)
            navigate("/")
        }else{
            alert("invalid Type")
        }
    }

    return(
        <div className="input-form">
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="textFormControlInput1" required={true}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="textFormControlInput1" required={true}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

export default Login;