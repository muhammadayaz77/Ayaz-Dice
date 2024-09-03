import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex items-center h-screen'>
    <div className='grid md:grid-cols-2 px-10 md:px-20'>
      <div>
        <img src="./public/images/dices.png" alt="dice Image" />
      </div>
      <div className='flex flex-col justify-center'>
        <h1 className='uppercase font-bold text-4xl md:text-9xl text-end'>Ayaz Dice</h1>
        <Link to='/play' className='bg-black w-fit text-white md:px-20 px-10 py-3 mt-3 text-sm ml-auto'>Play Now</Link>
      </div>
    </div>
    </div>
  )
}

export default Home