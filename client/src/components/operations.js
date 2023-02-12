import React from "react";
import { useNavigate } from "react-router-dom";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0)
    let user1 = fetch(`http://localhost:5000/api/ops/getuserdets`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "email": localStorage.getItem('email'),
        },
    });
    
    console.log(user1)
    //to define
    const handleWithdraw = async(e) => {
        console.log(amtDefine)
        if (user1.amount - amtDefine < 0)
        {
            alert(`Insufficient Funds!!!`);
        }
        else
        {
            let data = user1.amount - amtDefine
            //Manage
            // const response = await fetch(`/api/ops/modifyuser`, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "email": localStorage.getItem("email"),
            //         "access": localStorage.getItem("access"),
            //     },
            //     body: JSON.stringify({"amount": user1.amount - amtDefine}),
            // });
            const response = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "email": localStorage.getItem("email"),
                    "access": localStorage.getItem("access"),
                },
                body: JSON.stringify({
                    "amount": data,
                }),
            });
            if (response === "Success")   console.log(`Withdrawal successful!`)
            else console.log(`Withdrawal Error!`)
        }
    }

    //to define
    const handleDeposit = async(e) => {
        console.log(amtDefine)
        let data = user1.amount + amtDefine
        // const response = await fetch(`/api/ops/modifyuser`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "email": localStorage.getItem("email"),
        //         "access": localStorage.getItem("access"),
        //     },
        //     body: JSON.stringify({"amount": user1.amount + amtDefine}),
        // });

        const response = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email"),
                "access": localStorage.getItem("access"),
            },
            body: JSON.stringify({
                "amount": data,
            }),
        });
        if (response === "Success")   console.log(`Deposit successful!`)
        else console.log(`Deposit Error!`)
    }

    return(
        <div className="input-group">
            <label>Amount at present: {user1.amount}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleDeposit}>Deposit</button>   <button type="button" className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
};

export default Operations;