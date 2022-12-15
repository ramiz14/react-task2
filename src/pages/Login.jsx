import React from 'react'

const Login = () => {
  return (
  <div className="container">
    <div className="login">
        <div className="login-box">
        <input type="text" placeholder='Enter your Username' />
        <input type="pasword" placeholder='Enter your password' />
        <button className='btn btn-success'>Log in</button>
        </div>
    </div>
  </div>
  )
}

export default Login