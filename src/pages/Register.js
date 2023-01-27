import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

const Register = ({
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword }) => {

    const [cPassword, setCPassword] = useState("")

    const handleChange = (e, setState) => {
        setState(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='auth-container'>
            <h2 className='auth-container--title'>Create an account</h2>
            <form onSubmit={handleSubmit} className="auth-container--form register">
                <label htmlFor="loginEmail">Email</label>
                <input
                    type="text"
                    id="loginEmail"
                    name="loginEmail"
                    value={registerEmail}
                    onChange={e => handleChange(e, setRegisterEmail)}
                />
                <label htmlFor="loginPassword">Password</label>
                <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    value={registerPassword}
                    onChange={e => handleChange(e, setRegisterPassword)}
                />

                <label htmlFor="cPassword">Confirm password</label>
                <input
                    type="password"
                    id="cPassword"
                    name="cPassword"
                    value={cPassword}
                    onChange={e => handleChange(e, setCPassword)}
                />

                <button>Register</button>
            </form>
            <span>Already have an account ? <Link className='auth-container--link' to='/login'>Log In</Link></span>
        </div>
    )
}

export default Register