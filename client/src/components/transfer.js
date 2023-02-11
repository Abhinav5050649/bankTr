import React from "react";
import { useNavigate } from "react-router-dom";

const Transfer = () => {

    const [amtDefine, setAmtDefine] = React.useState(0.00)
    const [receiverEmail, setReceiverEmail] = React.useState('');

    let user1 = fetch(`/api/ops/getuserdets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":   localStorage.getItem('token'),
                "email": localStorage.getItem('email'),
            },
    });

    console.log(user1)
    let user1Amount = 0
    if (user1)  user1Amount = user1.amount
    else    alert("Issues to solve from server")

    //defined
    const handleTransaction = async(e) => {
        if (user1 == null)
        {
            alert("Error");
        }
        else{
            const response0 = await fetch(`/api/ops/getuserdets`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":   localStorage.getItem('token'),
                    "email": receiverEmail,
                },
            });

            let user2 = await response0.json();
            if (user2 == null)
            {
                alert("Error");
            }
            else{
                let data1 = user1.amount - amtDefine;
                let data2 = user2.amount + amtDefine;

                const response1 = await fetch(`/api/ops/modifyuser/${user1._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token'),
                    },
                    body: JSON.stringify({"amount": data1}),
                });

                const response2 = await fetch(`/api/ops/modifyuser/${user2._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token'),
                    },
                    body: JSON.stringify({"amount": data2}),
                });

                if (response1.json() === "Success" && response2.json() === "Success")   
                {
                    alert("Transaction Successful!!!")
                    console.log("Success")
                }
                else
                {
                    alert("Transaction Failed")
                    console.log("Issue")
                }
            }
        }
    }

    return(
        <div className="input-group">
            <label>Amount at present: {user1Amount}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <label>Enter receiver's EmailId: </label>
            <input type="email" className="input-control" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleTransaction}>Transfer</button>
        </div>
    )
};

export default Transfer;