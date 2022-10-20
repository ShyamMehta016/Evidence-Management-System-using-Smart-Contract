import React from 'react';
import ChatImg from '../assets/chat.svg'
import ChatRoom from "./ChatRoom"

export default function Chat() {
  return(
    <div className='mx-4 pt-8 pb-12'>

      <div className='mx-56'>
        <h1 className='text-3xl text-white'>Connect to the world</h1>
        <div
          className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl p-3 mx-auto">
          <div className="w-full grid place-items-center md:drop-shadow-3xl">
            <img src={ChatImg} width="400" height="400" alt="img" />
          </div>
          <div className="w-full md:w-2/3 text-white flex flex-col p-3">
            <h1 className="text-xl text-justify">The chance to meet new people with different views. The opportunity to get perspectives from around the world.</h1>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center h-screen mx-4">
        <ChatRoom />
    </div>
</div>
  );
}
