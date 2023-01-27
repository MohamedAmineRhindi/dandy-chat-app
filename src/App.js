import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // const register = async () => {

  // }

  // const login = async () => {

  // }

  // const logout = async () => {

  // }

  return (
    <Router>

      <Routes>
        <Route path='/login' element={
          <Login
            loginEmail={loginEmail}
            setLoginEmail={setLoginEmail}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
          />
        }>

        </Route>
        <Route path='/register' element={
          <Register
            registerEmail={registerEmail}
            setRegisterEmail={setRegisterEmail}
            registerPassword={registerPassword}
            setRegisterPassword={setRegisterPassword} />
        }>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
