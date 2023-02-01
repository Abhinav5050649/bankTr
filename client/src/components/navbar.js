import React from "react";
import axios from "axios";

const Navbar = ()=> {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/login">MiniBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/login">Login<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/signup">Signup</a>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;