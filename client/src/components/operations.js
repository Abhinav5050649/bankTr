import React from "react";
import { useNavigate } from "react-router-dom";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0.00)
    let user1 = null;
    const getDets = async() => {
        const response = await fetch(`/api/ops/fetchuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":   loclStorage.getItem('token'),
            },
        });
        user1 = await response.json();
    }
    
    //to define
    const handleWithdraw = (e) => {
        if (amtDefine > amount)
        {

        }
        else
        {
            const data = {
                "amount": amtDefine,
            }

            axios.put();
            const json = response.json()
            if (json)   console.log(`Clicked`)
        }
    }

    //to define
    const handleDeposit = (e) => {
        const data = {
            "amount": amtDefine,
        }
    }

    getDets();
    return(
        <div className="input-group">
            <label>Amount at present: {user1.amount}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" class="btn btn-success" onClick={handleDeposit}>Deposit</button>   <button type="button" class="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
};

export default Operations;