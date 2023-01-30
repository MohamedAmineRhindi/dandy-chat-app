import React from 'react'

const User = ({user,logout}) => {
  console.log(user)
  return (
    <div>
    <h1>{user?.email}</h1>
    <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default User