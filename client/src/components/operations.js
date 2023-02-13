import React from "react";
import { useNavigate } from "react-router-dom";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0)
    const handleWithdraw = async(e) => {
        console.log(amtDefine)
        console.log(localStorage.getItem('token'))
        const response = await fetch(`http://localhost:5000/api/ops/modifycurrentuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({"amount": amtDefine, "status": "W"}),
        });
        console.log(response)
        if (response.success)   console.log(`Withdrawal successful!`)
        else console.log(`Withdrawal Error!`)
    }

    //to define
    const handleDeposit = async(e) => {
        console.log(amtDefine)
        console.log(localStorage.getItem('token'))

        const response = await fetch(`http://localhost:5000/api/ops/modifycurrentuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({"amount": amtDefine}),
        });
        console.log(response)
        if (response.success)   console.log(`Deposit successful!`)
        else console.log(`Deposit Error!`)
    }

    return(
        <div className="input-group">
            <label>Amount at present: </label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleDeposit}>Deposit</button>
            <button type="button" className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
};

export default Operations;