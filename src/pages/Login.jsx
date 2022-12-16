import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const uName='admin'
  const passw='admin123'
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const uNameHandler =(e)=>{
    setUserName(e.target.value)
  }
  const passwHandler =(e)=>{
    setPassword(e.target.value)
  }
  const loginHandler =()=>{
    if (userName.toLocaleLowerCase()===uName&&password.toLocaleLowerCase()===passw) {
      navigate('/admin')
    }
    else(
      alert('User Name or Password is wrong')
    )
  }
  return (
  <div className="container">
    <div className="login">
        <div className="login-box">
        <input onChange={uNameHandler} type="text" placeholder='Enter your Username' />
        <input onChange={passwHandler} type="password" placeholder='Enter your password' />
        <button onClick={loginHandler} className='btn btn-success'>Log in</button>
        </div>
    </div>
  </div>
  )
}

export default Login