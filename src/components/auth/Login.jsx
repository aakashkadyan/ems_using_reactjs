import React from 'react'

const Login = () => {
  const submitHandler = () => {

    console.log("Hello aakash how are you ?")


  }


  return (
    <div className = 'flex h-screen w-screen items-center justify-center'>
      <div className = 'border-2 border-emerald-600 rounded p-20'>
        <form onSubmit={submitHandler} className = 'flex flex-col items-center justify-center'>
          <input className = 'text-black outline-none border-2 border-emerald-600 rounded-full mt-10 bg-transparent px-5 py-3'type='email' placeholder='enter your email' required></input>
          <input className = 'text-black outline-none border-2 border-emerald-600 rounded-full mt-5 bg-transparent px-5 py-3' type='password' placeholder='enter password' required></input>
          <button className = 'text-white cursor-pointer outline-none border-2 bg-emerald-600 rounded-full mt-5 mb-5 px-6 py-2'>Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
