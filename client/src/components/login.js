import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const login = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    console.log("Clicked");
    e.preventDefault();  

    const response = axios.post(`/api/auth/login`, credentials);
    
    return(
        <div>

        </div>
    );
};

export default login;