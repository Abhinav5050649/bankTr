import React from "react";
import  {useNavigate} from "react-router-dom";

const Newnav = ()=> {

    let navigate = useNavigate();

    const handleClick = (e) => {
      localStorage.removeItem('token');
      navigate("/");
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">MiniBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Operations<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/transfer">Transfer</a>
              <button className="nav-item nav-link" onClick={handleClick}>Log Out</button>
            </div>
          </div>
        </nav>
    );
}

export default Newnav;