import React from 'react'

export default function Close() {
  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-white">View Closed FIR</h1>
        <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
      </div>

      <div className='flex flex-wrap items-center justify-around space-x-4 space-y-4'>

        <div className='bg-white w-72 p-4 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-800'>File No: 3356</h1>
          <div className='bg-red-500 h-1 w-will my-2 rounded-lg'></div>
          <h1 className='text-xl font-bold text-gray-800'>Filed On: 22-05-22</h1>
          <h1 className='text-xl font-bold text-gray-800'>Solved On: 30-10-22</h1>
          <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4'>Re Open Case</button>
        </div>

        <div className='bg-white w-72 p-4 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-800'>File No: 3556</h1>
          <div className='bg-red-500 h-1 w-will my-2 rounded-lg'></div>
          <h1 className='text-xl font-bold text-gray-800'>Filed On: 22-05-22</h1>
          <h1 className='text-xl font-bold text-gray-800'>Solved On: 30-10-22</h1>
          <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4'>Re Open Case</button>
        </div>

      </div>
    </div>
  )
}
