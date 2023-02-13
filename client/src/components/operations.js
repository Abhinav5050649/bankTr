import React from "react";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0)

    const getDets = async(e) => {
        let response = await fetch(`http://localhost:5000/api/ops/getuserdets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":   localStorage.getItem('token'),
                "email": localStorage.getItem('email'),
            }
        });
        return response.json();
    }

    let user1 = getDets();
    console.log(user1)

    const handleWithdraw = async(e) => {
        console.log(amtDefine)
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('email'))

        const response = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({"email": localStorage.getItem('email'), "amount": amtDefine, "status": "W"}),
        });
        console.log(response.success)
        if (response.success === 1)   console.log(`Withdrawal successful!`)
        else    console.log(`Withdrawal Error!`)
    }

    //to define
    const handleDeposit = async(e) => {
        console.log(amtDefine)
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('email'))

        const response = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ "email": localStorage.getItem('email'), "amount": amtDefine,"status": "D"}),
        });

        console.log(response.success)
        if (response.success === 1)   console.log(`Deposit successful!`)
        else    console.log(`Deposit Error!`)
    }

    return(
        <div className="input-group">
            <label>Amount at present: {user1.amount}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleDeposit}>Deposit</button>
            <button type="button" className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
};

export default Operations;