import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import "./index.css";
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { getLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext (AuthContext)
  
  // useEffect(() => {

  //   if(authData){

  //     const loggedInUser = localStorage.getItem("loggedInUser")

  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }

  //   }
    
  // },[authData]);


  //console.log(authData)
  const handleLogin =(email,password) =>{
    if(email == 'admin@abc.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if (authData){
      const employee = authData.employees.find((e) => email==e.email && password == e.password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))

      }
      
      
    }
    else {
      alert('Invalid Credentials!!!!!!')
    }
    


  }
  return (
    <>
    
    {!user ? <Login handleLogin = {handleLogin}/> :''} 
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/> : null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}

    </>
  )
}

export default App
