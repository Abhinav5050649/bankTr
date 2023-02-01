import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Alert  from "./components/alert";
import  Login  from "./components/Login";
import  Signup  from "./components/SignUp";
import Navbar from "./components/navbar";
import Newnav  from './components/newnav';
import Home from "./components/home";
import Operations from "./components/operations";

function App() {

  if (!localStorage.getItem('token')){
    return (
      <>
        <Router>
          <Navbar/>
          <Alert/>
            <div className="App">
              <Routes>
                <Route exact path="/login" element={<Login key="login" />}/>
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
        <alert/>
          <div className="App">
            <Routes>
              <Route exact path="/home" element={<Home key="home" />}/>
              <Route exact path="/operations" element={<Operations key="operations" />}/>
              <Route exact path="/transfer" element={<Transfer key="transfer" />}/>
            </Routes>
          </div>
      </Router>
      </>
    );
  }
}

export default App;
