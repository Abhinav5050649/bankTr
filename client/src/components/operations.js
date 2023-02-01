import React from "react";
import { useNavigate } from "react-router-dom";

const Operations = () => {

    const [amtDefine, setAmtDefine] = React.useState(0.00)

    const user = axios.get()
    const handleDeposit = (e) => {
        if (amtDefine > amount)
        {

        }
        else
        {
            const data = {
                "amount": amtDefine,
            }

            axios.put();
            const json = response.json()
            if (json)   console.log(`Clicked`)
        }
    }

    return(
        <div className="input-group">
            <label>Amount at present: {}</label><br/>

            <label>Enter amount: </label>
            <input type="number" className="input-control" value={amtDefine} onChange={(e) => setAmtDefine(e.target.value)} id="textFormControlInput1" required={true}></input><br/>

            <button type="button" class="btn btn-success" onClick={handleDeposit}>Deposit</button>   <button type="button" class="btn btn-danger">Danger</button>
        </div>
    )
};

export default Operations;