import axios from 'axios';
import React from 'react'
import { useState } from 'react'
let x=0
const AddUser = () => {
  const [firstName,setFirstName]=useState('');
  const [email,setEmail]=useState('');
  const [lastName,setLastName]=useState('');
  const [age,setAge]=useState('');
  const userHandler=()=>{
    x++
    const addUser=async()=>{
       const newUser={
        firstName:firstName,
        lastName:lastName,
        email:email,
        age:age,
        id:x
      }
      const data=await axios.post('http://localhost:8000/results',newUser)
      
    }
    addUser();
    alert('User Added!')
    window.location.reload()
  }
  const fNameHandler=(e)=>{
    setFirstName(e.target.value)
  }
  const lNameHandler=(e)=>{
    setLastName(e.target.value)
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const ageHandler=(e)=>{
    setAge(e.target.value)
  }
  return (
    <div className="form-content container">
                    <div className="row">
                        <div className="col-lg-12 col-6">
                            <div className="form-group">
                                <input onChange={fNameHandler} type="text" className="form-control" placeholder="Your First name *"/>
                            </div>
                            <div className="form-group my-2">
                                <input onChange={lNameHandler} type="text" className="form-control" placeholder="Your Last name  *" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-6 my-2">
                            <div className="form-group">
                                <input onChange={emailHandler} type="email" className="form-control" placeholder="Your Email"/>
                            </div>
                            <div className="form-group my-2">
                                <input onChange={ageHandler} type="Number" className="form-control" placeholder="Your Age*"/>
                            </div>
                        </div>
                    </div>
                    <button type='submit' onClick={userHandler} className="btn btn-success">Add User</button>
                </div>
    )
}

export default AddUser