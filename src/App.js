import './App.css';
import React, { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth } from './firebaseConfig'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  BrowserRouter
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import Home from './pages/Home';

function App() {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  }, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={
            <Login
              loginEmail={loginEmail}
              setLoginEmail={setLoginEmail}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
              login={login}
            />
          } />
          <Route path='/register' element={
            <Register
              registerEmail={registerEmail}
              setRegisterEmail={setRegisterEmail}
              registerPassword={registerPassword}
              setRegisterPassword={setRegisterPassword}
              register={register} />
          } />
          <Route path={`/user`} element={
            <User user={user} logout={logout} />
          } />
        </Routes>
      </Router>
  );
}

export default App;
