import React from "react";
import axios from "axios";

const Home = () => {

    const response = axios.get(`/api/ops/getuserdets`, {
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        }
    })
    let dets = response.json();
    if (dets == NULL)   console.log('error');

    const handleWithdraw = (e) => {

    }

    const handleDeposit = (e) => {
        
    }
    return(
        <div>
            
        </div>
    )
}

export default Home;