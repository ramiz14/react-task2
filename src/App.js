import axios from 'axios'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import AddUser from './pages/AddUser';
import Admin from './pages/Admin';
import Header from './components/Header';
import EditUser from './pages/EditUser';
import Login from './pages/Login';
import { useEffect, useState } from 'react';



function App() {
  const [users,setUsers]=useState([]);
  
  useEffect(()=>{
    const getUsers= async () =>{
      const response=await axios.get('https://melivecode.com/api/users')
      setUsers(response.data)
      console.log(response)
    }
    getUsers();
  },[])

  return (
    <div className="App">
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Mainpage Users={users}/>} />
          <Route path='admin' element={<Admin Users={users} />} />
          <Route path='edit' element={<EditUser />} />
          <Route path='login' element={<Login />} />
          <Route path='add' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
