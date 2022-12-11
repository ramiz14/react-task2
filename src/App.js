import axios from 'axios'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import AddUser from './pages/AddUser';
import Header from './components/Header';
import { useEffect, useState } from 'react';



function App() {
  const [users,setUsers]=useState([]);
  
  useEffect(()=>{
    const getUsers= async () =>{
      const response=await axios.get('http://localhost:8000/results')
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
          <Route path='add' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
