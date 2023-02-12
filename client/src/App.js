import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "./components/login";
import Signup  from "./components/signup";
import Navbar from "./components/navbar";
import Newnav  from './components/newnav';
import Operations from "./components/operations";
import Transfer from "./components/transfer";

function App() {

  if (!localStorage.getItem('token')){
    return (
      <>
        <Router>
          <Navbar/>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Login key="login" />}/>
                <Route exact path="/signup" element={<Signup key="signup" />}/>
              </Routes>
            </div>
        </Router>
      </>
    );
  }else{
    return(
      <>
      <Router>
        <Newnav/>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Operations key="operations" />}/>
              <Route exact path="/transfer" element={<Transfer key="transfer" />}/>
            </Routes>
          </div>
      </Router>
      </>
    );
  }
}

export default App;
