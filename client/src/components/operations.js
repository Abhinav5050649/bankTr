import React from "react";
import {useNavigate} from "react-router-dom";

const Operations = () => {

    let navigate = useNavigate();

    const [amtDefine, setAmtDefine] = React.useState(0)
    const [userAmount, setUserAmount] = React.useState(0)
    
    const getDets = async() => {
        let response = await fetch(`http://localhost:5000/api/ops/getuserdets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":   localStorage.getItem('token'),
                "email": localStorage.getItem('email'),
            }
        });
        let val = await response.json();
        setUserAmount(val.amount)
        return val;
    }

    let user1 = getDets();
    
    const handleWithdraw = async(e) => {
        if (userAmount < amtDefine)
        {
            alert("Insufficient Balance!!!")
        }else{
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
            if (j.success === "1"){
                alert(`Withdrawal successful!`)
                setAmtDefine(0)
                navigate("/")
            }else{   
                alert(`Withdrawal Error!`)
                setAmtDefine(0)
                navigate("/")
            }
        }
    }

    const handleDeposit = async(e) => {
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
        if (j.success === "1")   
        {
            alert(`Deposit successful!`)
            setAmtDefine(0)
            navigate("/")
        }else{    
            alert(`Deposit Error!`)
            setAmtDefine(0)
            navigate("/")
        }
    }
    
    return(
        <div className="input-group">
            <label>Amount at Present: {`${userAmount}`}</label><br/>
            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" className="btn btn-success" onClick={handleDeposit}>Deposit</button>
            <button type="button" className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
};

export default Operations;