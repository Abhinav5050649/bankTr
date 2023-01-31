import React from "react";
import axios from "axios";

export const newnav = ()=> {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home">MiniBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/home">Home<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/operations">Operations</a>
              <a className="nav-item nav-link" href="/transfer">Transfer</a>
            </div>
          </div>
        </nav>
    );
}