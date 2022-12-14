import React from "react"
import HeroImg from '../assets/hero.svg'
import InspirationImg from '../assets/inspiration.svg'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div>
      <div className='md:mx-28 mx-4 text-white py-10'>

        <div className='md:grid md:grid-cols-2 items-center'>
          <div className=''>
            <h1 className='text-3xl md:text-6xl'>Who we are</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider'>As more and more automobiles become linked and a part of the Internet of Things ecosystem, the digital collection and preservation of accident-related information is becoming increasingly important. In order to examine the future of accident investigation forensics in the connected vehicle era, a conceptual evidence management paradigm is developed.</p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HeroImg} alt="img" width="350" height="350" />
          </div>
        </div>

        <div className='md:grid md:grid-cols-2 pt-12 items-center'>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={InspirationImg} alt="img" width="350" height="350" />
          </div>
          <div className=''>
            <h1 className='text-3xl md:text-6xl'>What else do we have</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider'> Evidence Management System using Smart Contract is a web app where you can:
            </p>
            <ul className="text-xl">
              <li className="list-disc">Whats in the app</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
