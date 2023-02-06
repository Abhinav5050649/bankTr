import React from "react";
import { useNavigate } from "react-router-dom";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0.00)
    let user1 = null;
    const getDets = async() => {
        const response = await fetch(`/api/ops/getuserdets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":   localStorage.getItem('token'),
                "email": localStorage.getItem('email'),
            },
        });
        user1 = await response.json();
    }
    
    //to define
    const handleWithdraw = async(e) => {
        if (user1.amount - amtDefine < 0)
        {
            alert(`Insufficient Funds!!!`);
        }
        else
        {
            const data = {
                "amount": user1.amount - amtDefine,
            }

            //Manage
            const response = await fetch(`/api/ops/modifyuser/${user1._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token'),
                },
                body: JSON.stringify({"amount": data.amount}),
            });
            const json = response.json()
            if (json === "Success")   console.log(`Withdrawal successful!`)
            else console.log(`Withdrawal Error!`)
        }
    }

    //to define
    const handleDeposit = async(e) => {

        const data = {
            "amount": (user1.amount + amtDefine),
        }

        const response = await fetch(`/api/ops/modifyuser/${user1._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({"amount": data.amount}),
        });
        const json = response.json()
        if (json === "Success")   console.log(`Deposit successful!`)
        else console.log(`Deposit Error!`)
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