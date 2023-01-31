import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {alert}  from "./components/alert";
import { login } from "./components/Login";
import { signup } from "./components/SignUp";
import {navbar} from "./components/navbar";
import { newnav } from './components/newnav';
import home from "./components/home";
import operations from "./components/operations";
function App() {

  if (!localStorage.getItem()){
    return (
      <>
        <Router>
          <navbar/>
          <alert/>
            <div className="App">
              <Routes>
                <Route exact path="/login" element={<login key="login" />}/>
                <Route exact path="/signup" element={<signup key="signup" />}/>
              </Routes>
            </div>
        </Router>
      </>
    );
  }else{
    return(
      <>
      <Router>
        <newnav/>
        <alert/>
          <div className="App">
            <Routes>
              <Route exact path="/home" element={<home key="home" />}/>
              <Route exact path="/operations" element={<signup key="operations" />}/>
              <Route exact path="/transfer" element={<transfer key="transfer" />}/>
            </Routes>
          </div>
      </Router>
      </>
    );
  }
}

export default App;
