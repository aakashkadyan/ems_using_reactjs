import React, { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import "./index.css";
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { getLocalStorage } from './utils/LocalStorage';

const App = () => {
  
  // useEffect(() => {


  //   setLocalStorage()
  //   getLocalStorage()
    
  // });

  const [user, setUser] = useState(null);
  const handleLogin =(email,password) =>{
    if(email == 'admin@abc.com' && password == '123'){
      setUser('admin')
    }
    else if (email == 'user@abc.com' && password == '123'){
      setUser('employee')
    }
    else {
      alert('Invalid Credentials!!!!!!')
    }
    


  }
  return (
    <>
    
    {!user ? <Login handleLogin = {handleLogin}/> :''} 
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />} 
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}

    </>
  )
}

export default App
