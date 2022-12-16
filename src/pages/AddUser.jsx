import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import '../App.css'
let x=0
const AddUser = () => {
  const [firstName,setFirstName]=useState('');
  const [email,setEmail]=useState('');
  const [lastName,setLastName]=useState('');
  const [image,setImage]=useState(null);
  const userHandler=()=>{
    x++
    const addUser=async()=>{
       const newUser={
        
      }
      const data=await axios.post('https://www.melivecode.com/api/users',newUser)
      
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
  const imageHandler=(e)=>{
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className="form-content container">
                    <div className="row">
                        <div className="col-lg-12 col-6">
                            <div className="form-group">
                                <input onChange={fNameHandler} type="text" className="form-control" placeholder="Enter Your First name *"/>
                            </div>
                            <div className="form-group my-2">
                                <input onChange={lNameHandler} type="text" className="form-control" placeholder="Enter Your Last name  *" />
                            </div>
                            <div className="form-group my-2">
                                <input onChange={emailHandler} type="text" className="form-control" placeholder="Enter Your Email  *" />
                            </div>
                            <div className="form-group my-2">
                                <input onChange={imageHandler} type="file" className="form-control" placeholder="Enter Your Last name  *" />
                            </div>
                        </div>
                        {image!==null ?<div className='avatar'><img src={image} alt="" /></div>:''}
                        
                    </div>
                    <button type='submit' onClick={userHandler} className="btn btn-success">Add User</button>
                </div>
    )
}

export default AddUser