import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';


const Mainpage = (props) => {
  const [value,setValue]=useState('')
  const valueHandler=(e) =>{
    setValue(e.target.value)
  }
  const y=props.Users.filter(user =>user.fname.toLowerCase().includes(value.toLowerCase()))
  return (
   <div className="container ">
      <input onChange={valueHandler} type="text" placeholder='search...' className='form-control w-50 mx-auto my-2' />

     <table className="table table-dark table-hover ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope='col'>Image</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
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
          
        </tr>
      )
     })
   }
  </tbody>
</table>
   </div>
  )
}

export default Mainpage