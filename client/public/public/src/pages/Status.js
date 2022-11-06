import React from 'react'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Status() {

  const [showNavbar, setShowNavbar] = React.useState(false);
  const [showNavbar2, setShowNavbar2] = React.useState(false);

  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-white">View Status</h1>
        <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
      </div>

      <div className='flex flex-wrap items-center justify-around space-x-4 space-y-4'>

        <div className='bg-white w-72 p-4 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-800'>File No: 3356</h1>
          <div className='bg-blue-500 h-1 w-will my-2 rounded-lg'></div>
          <h1 className='text-xl font-bold text-gray-800'>Filed On: 22-05-22</h1>
          <h1 className='text-xl font-bold text-gray-800'>Status: Pending</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4' onClick={() => setShowNavbar(true)}>View Details</button>
          {showNavbar ? (
            <div className='grid place-items-center w-screen -ml-60'>
              <div className=" flex overflow-x-hidden w-96 mx-4  mt-72 md:mx-8 h-screen overflow-y-auto fixed z-50 outline-none focus:outline-none"
              >
                <div className="my-6 mx-auto w-screen">
                  <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                      <div className="text-2xl font-base tracking-wide cursor-pointer">
                        {/* Add file name */}
                        File Name: 3356
                      </div>

                      <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                        <HiX className="h-7 w-7" aria-hidden="false" />
                      </button>

                    </div>

                    <div className="grid justify-center">
                      <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                    </div>

                    <div className="grid text-left  text-xl p-2 gap-2 w-full mb-4"
                    >
                      <h1 className='text-xl font-bold text-gray-800'>File No: 3356</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Date: 22-05-22</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Place: Delhi</h1>                      
                      <h1 className='text-xl font-bold text-gray-800'>Officer Assigned: Bhalu</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Incident Details: lorn....</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Description: A Bear with no beard</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
            </div>
          ) : null}
        </div>

        <div className='bg-white w-72 p-4 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-800'>File No: 3356</h1>
          <div className='bg-blue-500 h-1 w-will my-2 rounded-lg'></div>
          <h1 className='text-xl font-bold text-gray-800'>Filed On: 22-05-22</h1>
          <h1 className='text-xl font-bold text-gray-800'>Status: Pending</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4' onClick={() => setShowNavbar2(true)}>View Details</button>
          {showNavbar2 ? (
            <div className='grid place-items-center w-screen -ml-[64rem]'>
              <div className=" flex overflow-x-hidden w-96 mx-4  mt-72 md:mx-8 h-screen overflow-y-auto fixed z-50 outline-none focus:outline-none"
              >
                <div className="my-6 mx-auto w-screen">
                  <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                      <div className="text-2xl font-base tracking-wide cursor-pointer">
                        {/* Add file name */}
                        File Name: 3356
                      </div>

                      <button className="absolute right-6" onClick={() => setShowNavbar2(false)} aria-hidden="false" aria-label="button">
                        <HiX className="h-7 w-7" aria-hidden="false" />
                      </button>

                    </div>

                    <div className="grid justify-center">
                      <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                    </div>

                    <div className="grid text-left  text-xl p-2 gap-2 w-full mb-4"
                    >
                      <h1 className='text-xl font-bold text-gray-800'>File No: 3356</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Date: 22-05-22</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Place: Delhi</h1>                      
                      <h1 className='text-xl font-bold text-gray-800'>Officer Assigned: Bhalu</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Incident Details: lorn....</h1>
                      <h1 className='text-xl font-bold text-gray-800'>Description: A Bear with no beard</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
            </div>
          ) : null}
        </div>

      </div>
    </div>
  )
}
