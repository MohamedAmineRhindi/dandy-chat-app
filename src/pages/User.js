import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user,logout}) => {
  console.log(user)
  return (
    <div>
    <h1>{user?.email}</h1>
    {user ? <button onClick={logout}>LogOut</button> : <Link to="/login">Log In</Link>}
    </div>
  )
}

export default User