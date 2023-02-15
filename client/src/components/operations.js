import React from "react";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0)

    //refer diary app for mapping function for solution[to be used for transfer component as well]
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
        const j = await response.json()
        console.log(j)
        if (j.success === "1")   console.log(`Withdrawal successful!`)
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

        const j = await response.json()
        console.log(j)
        if (j.success === "1")   console.log(`Deposit successful!`)
        else    console.log(`Deposit Error!`)
    }
    
    // const jsonstring =JSON.parse(user1)
    // console.log(jsonstring)
    // document.getElementsByClassName("test").innerHTML=jsonstring.amount
    // let str = "amount at present = " + user1.amount;
    // let displaystring = document.getElementById("test").innerText =str
    return(
        <div className="input-group">
            {
                //  user1.map((item) => {
                //     return (
                //         <li key={item._id} className="list-group-item">
                //             <p>Amount at present: {item.amount}</p>
                //         </li>
                //     );
                // })
            }
            
            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleDeposit}>Deposit</button>
            <button type="button" className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
};

export default Operations;