import React from "react";
import { useNavigate } from "react-router-dom";

const Transfer = () => {

    const [amtDefine, setAmtDefine] = React.useState(0.00)
    const [receiverEmail, setReceiverEmail] = React.useState('');

    //to define
    const handleTransaction = async(e) => {
        
    }

    return(
        <div className="input-group">
            <label>Amount at present: {}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <label>Enter receiver's EmailId: </label>
            <input type="email" className="input-control" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" class="btn btn-success" onClick={handleTransaction}>Transfer</button>
        </div>
    )
};

export default Transfer;