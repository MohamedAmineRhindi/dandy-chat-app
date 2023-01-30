import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

const Login = ({
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    login }) => {

    const handleChange = (e, setState) => {
        setState(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }

    return (
        <div className='auth-container'>
            <h2 className='auth-container--title'>Login to your account</h2>
            <form onSubmit={handleSubmit} className="auth-container--form">
                <label htmlFor="loginEmail">Email</label>
                <input
                    type="text"
                    id="loginEmail"
                    name="loginEmail"
                    value={loginEmail}
                    onChange={e => handleChange(e, setLoginEmail)}
                />
                <label htmlFor="loginPassword">Password</label>
                <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    value={loginPassword}
                    onChange={e => handleChange(e, setLoginPassword)}
                />
                <button>Log In</button>
            </form>
            <span>Don't have an account yet ? <Link className='auth-container--link' to='/register'>Sign up</Link> instead.</span>
        </div>
    )
}

export default Login