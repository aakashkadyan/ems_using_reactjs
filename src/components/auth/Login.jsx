import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    console.log("Email is: ", email)
    console.log("Password is: ", password)
    setEmail("")
    setPassword("")

  }

  return (
    <div className = 'flex h-screen w-screen items-center justify-center'>
      <div className = 'border-2 border-emerald-600 rounded p-20'>
        <form 
        
        onSubmit = {(e)=>{

          submitHandler(e)

        }}
        
        className = 'flex flex-col items-center justify-center'>
          <input 
          
          value ={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          
          className = 'text-black outline-none border-2 border-emerald-600 rounded-full mt-10 bg-transparent px-5 py-3'type='email' placeholder='enter your email' required></input>
          <input
          value ={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className = 'text-black outline-none border-2 border-emerald-600 rounded-full mt-5 bg-transparent px-5 py-3' type='password' placeholder='enter password' required></input>
          <button className = 'text-white cursor-pointer outline-none border-2 bg-emerald-600 rounded-full mt-5 mb-5 px-6 py-2'>Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
