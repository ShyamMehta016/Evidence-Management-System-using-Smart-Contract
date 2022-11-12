import React from 'react'

export default function File() {
  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-white">View FIR</h1>
        <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
      </div>

      <div className='flex flex-wrap items-center justify-around space-x-4 space-y-4'>

        <div className='bg-white w-96 p-4 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-800'>File No: 3355</h1>
          <div className='bg-blue-500 h-1 w-will my-2 rounded-lg'></div>
          <h1 className='text-xl font-bold text-gray-800'>Filed On: 12-11-22</h1>
          <h1 className='text-xl font-bold text-gray-800'>Status: No Officer Assigned</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>View Details</button>
        </div>

        <div className='bg-white w-96 p-4 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-800'>File No: 3356</h1>
          <div className='bg-blue-500 h-1 w-will my-2 rounded-lg'></div>
          <h1 className='text-xl font-bold text-gray-800'>Filed On: 22-05-22</h1>
          <h1 className='text-xl font-bold text-gray-800'>Status: No Officer Assigned</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>View Details</button>
        </div>

      </div>
    </div>
  )
}
