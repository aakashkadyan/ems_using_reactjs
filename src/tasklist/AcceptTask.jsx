import React from 'react'

const AcceptTask = () => {
  return (
    <div>
        <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-red-300 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='text-white bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm text-white'>20th March, 2025</h4>
            </div>
            <h2 className='text-white text-2xl mt-5 font-semibold'>Make a website Design</h2>
            <p className='text-sm text-white mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit dolor doloremque veritatis!
                Perspiciatis quae fugit esse veritatis ab fugiat harum velit.
                Minima distinctio impedit voluptatem repellat eos magni laboriosam?
            </p>
            <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as complete</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
        </div>
        
      
    </div>
  )
}

export default AcceptTask
