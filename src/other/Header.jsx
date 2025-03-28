import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Aakash 👋</span> </h1>
      <button className='bg-red-500 rounded px-3 py-1 text-lg font-medium text-white text-2xl'>Log out</button>
    </div>
  )
}

export default Header
