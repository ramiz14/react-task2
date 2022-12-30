import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

const AddUser = (props) => {
  const [firstName,setFirstName]=useState('');
  const [email,setEmail]=useState('');
  const [lastName,setLastName]=useState('');
  const [image,setImage]=useState('');
  const date=new Date()
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
  const file=e.target.files[0]
  const reader=new FileReader();
  reader.readAsDataURL(file)
  reader.onloadend=()=>{setImage(reader.result)}
  } 
  const userHandler=()=>{
    const addUser=async()=>{
      console.log(image);
       const newUser={
          fname:firstName,
          lname:lastName,
          username:email,
          avatar:image,
          date:`${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`
      }
      await axios.post('http://localhost:8000/users',newUser)
      
    }
    addUser();
    alert('User Added!')
    window.location.reload()
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
                                <input onChange={imageHandler} type="file" accept='image/*' className="form-control" placeholder="Enter Your Last name  *" />
                            </div>
                        </div>
                        {image.length>5 ?<div className='avatar'><img src={image} alt="" /></div>:''} 
                    </div>
                    <button type='submit' onClick={userHandler} className="btn btn-success">Add User</button>
                </div>
    )
}

export default AddUser