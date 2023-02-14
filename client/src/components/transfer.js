import React from "react";

const Transfer = () => {

    const [amtDefine, setAmtDefine] = React.useState(0)
    const [receiverEmail, setReceiverEmail] = React.useState('');

    const getDets = async(e) => {
        let response = await fetch(`http://localhost:5000/api/ops/getuserdets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":   localStorage.getItem('token'),
                "email": localStorage.getItem('email'),
            }
        });
        let val = await response.json();
        return val;
    }

    let user1 = getDets();
    //console.log(user1)

    //defined
    const handleTransaction = async(e) => {
           
        const response1 = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({"email": localStorage.getItem('email'), "amount": amtDefine, "status": "W"}),
        });

        const response2 = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({"email": receiverEmail, "amount": amtDefine, "status": "D"}),
        });

        const j1 = await response1.json(), j2 = await response2.json()
        console.log(j1)
        console.log(j2)

        if (j1.success === "1" && j2.success === "1")   
        {
            alert("Transaction Successful!!!")
            console.log("Success")
        }
        else
        {
            alert("Transaction Failed")
            const response1 = await fetch(`http://localhost:5000/api/ops/modifyuser`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token'),
                },
                body: JSON.stringify({"email": localStorage.getItem('email'), "amount": amtDefine, "status": "D"}),
            });

            const j1 = await response1.json()
            if (j1.success === "1") console.log("rectification done")
            
            console.log("Error at our end")
        }
    }


    return(
        <div className="input-group">
            <label>Amount at present: {toString(user1.amount)}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <label>Enter receiver's EmailId: </label>
            <input type="email" className="input-control" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleTransaction}>Transfer</button>
        </div>
    )
};

export default Transfer;