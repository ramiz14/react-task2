import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'


const EditUser = () => {
const location=useLocation()
const [firstName,setFirstName]=useState('');
const [email,setEmail]=useState('');
const [lastName,setLastName]=useState('');
const [image,setImage]=useState(null);
const [users,setUsers]=useState([]);
  
  useEffect(()=>{
    const getUsers= async () =>{
      const response=await axios.get('http://localhost:8000/users')
      setUsers(response.data)
    }
    getUsers();
  },[])
 
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
  
const userHandler=()=>{
    const newUser={
        fname:firstName,
        lname:lastName,
        username:email,
        avatar:image
     }
     console.log(newUser);
     axios.put(`http://localhost:8000/users/${location.state.id}`,newUser)
    alert('User Edited!')
    window.location.reload()
  }
  return (
    <div className="container">
        <div className='text-center'>
        <h1>Current Informations</h1>
        {users&&users.map(user=>{
            if (user.id===location.state.id) {
                return(
                    <div key={user.id}>
                    <img className='edit-avatar' src={user.avatar} alt="" />
                    <p>Name:{user.fname}</p>
                    <p>Last Name:{user.lname}</p>
                    <p>Email:{user.username}</p>
                    </div>
                )
            }
            return('')
        })}
        
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
                        <button type='submit' onClick={userHandler} className="btn btn-success">Edit User</button>
                        
                    </div>
    </div>
    </div>
  )
}

export default EditUser