import React, { useState } from 'react'

function HeadCon({num,SetNum,result}) {
  let buttons = [1,2,3,4,5,6];
  return (
    <>
     <div className='flex flex-wrap justify-between py-5 px-10'>
      <div className='flex flex-col items-center'>
        <div className='text-6xl font-semibold'>{result}</div> 
        <p className='text-xl font-normal'>Total Score</p>
      </div>
      <div>
    {
      buttons.map((btn) => (
        <button className={`sm:px-4 sm:py-3 p-2 border-gray-800 border-2 m-1 font-bold
        hover:bg-black hover:text-white ${num == btn && 'bg-black text-white'}`}
        onClick={() => SetNum(btn)}
        >{btn}</button>
      ))
    }
    <p className='text-end font-bold'>Select Number</p>
      </div>
    </div>
    </>
  )
}

export default HeadCon