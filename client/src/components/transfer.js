import React from "react";
import { useNavigate } from "react-router-dom";

const Transfer = () => {

    const [amtDefine, setAmtDefine] = React.useState(0)
    const [receiverEmail, setReceiverEmail] = React.useState('');

    let user1 = fetch(`http://localhost:5000/api/ops/getuserdets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem('email'),
            },
    });

    console.log(user1)

    //defined
    const handleTransaction = async(e) => {
        if (user1 == null)
        {
            alert("Error");
        }
        else{
            let user2 = await fetch(`http://localhost:5000/api/ops/getuserdets`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "email": receiverEmail,
                },
            });
            console.log(user2)
            if (user2 == null)
            {
                alert("Error");
            }
            else{
                let data1 = user1.amount - amtDefine;
                let data2 = user2.amount + amtDefine;
                console.log(data1 + " " + data2)
                const response1 = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "email": localStorage.getItem("email"),
                    },
                    body: JSON.stringify({"amount": data1}),
                });

                console.log(receiverEmail)
                const response2 = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "email": receiverEmail,
                    },
                    body: JSON.stringify({"amount": data2}),
                });

                if (response1 === "Success" && response2 === "Success")   
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
            <label>Amount at present: {user1.amount}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <label>Enter receiver's EmailId: </label>
            <input type="email" className="input-control" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleTransaction}>Transfer</button>
        </div>
    )
};

export default Transfer;