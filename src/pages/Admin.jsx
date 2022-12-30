
import React from 'react'
import { FaTrash } from 'react-icons/fa';
import {AiFillEdit} from 'react-icons/ai'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = (props) => {
    const [value,setValue]=useState('')
  const valueHandler=(e) =>{
    setValue(e.target.value)
  }
  const y=props.Users.filter(user =>user.fname.toLowerCase().includes(value.toLowerCase()))
  return (
    <div className="container ">
    <input onChange={valueHandler} type="text" placeholder='search...' className='form-control w-50 mx-auto my-2' />
    <Link to={'/add'}><button className='btn btn-primary'>Add User</button></Link>
   <table className="table table-dark table-hover ">
<thead>
  <tr>
    <th scope="col">Id</th>
    <th scope='col'>Image</th>
    <th scope="col">Full Name</th>
    <th scope="col">Email</th>
    <th scope="col">Date</th>
    <th scope='col'>Edit</th>
  </tr>
</thead>
<tbody>
 {
   y.map(user=>{
    return(
      <tr key={user.id}>
        <td>{user.id}</td>
        <td className='img'><img src={user.avatar} alt="" /></td>
        <td>{user.fname} {user.lname}</td>
        <td>{user.username}</td>
        <td>{user.date}</td>
        <td><Link state={{id:user.id}} to='/edit'><button className='btn btn-warning'><AiFillEdit />Edit</button></Link><button onClick={async()=>{ await axios.delete(`http://localhost:8000/users/${user.id}`)}} className='btn btn-danger'><FaTrash /> Delete</button></td>
      </tr>
    )
   })
 }
</tbody>
</table>
 </div>
  )
}

export default Admin
