import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';


const Mainpage = (props) => {
  const [value,setValue]=useState('')
  const deleteHandler=(id)=>{
    const deleteUser=async ()=>{
      await axios.delete(`http://localhost:8000/results/${id}`)
      .then(console.log(id))
    }
    deleteUser()
  }
  const valueHandler=(e) =>{
    setValue(e.target.value)
  }
  const y=props.Users.filter(user =>user.firstName.toLowerCase().includes(value.toLowerCase()))
  return (
   <div className="container ">
      <input onChange={valueHandler} type="text" placeholder='search...' className='form-control w-50 mx-auto my-2' />

     <table className="table table-dark table-hover ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
   {
     y.map(user=>{
      return(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstName} {user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td><button onClick={()=>deleteHandler(user.id)} className='btn btn-danger'><FaTrash /> Delete</button></td>
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