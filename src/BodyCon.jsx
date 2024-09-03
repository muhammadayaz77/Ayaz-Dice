import React,{useState} from 'react'

function BodyCon({roll,setRoll,result,setResult,num}) {
  let [selected,SetSelected] = useState(false);
  let handleImgRoll = () => {
      let nums = parseInt(Math.random() * 6 + 1);
      setRoll(nums);
      console.log(roll)
      if(num == nums){
        setResult(result + num)
      }
      else if(result < -26)
      {
        alert('You lost!!!')
        setResult(0);
      }
      else if(result >= 20)
        {
          alert('You Won Hurray!!!')
          setResult(0);
        }
      else{        
        setResult(result - 2)
      }

  }
  return (
    <>
     <div className='flex flex-col items-center mt-20'>
      <div className='w-44'>
        <img src={`./public/images/dice/dice_${roll}.png`}
        onClick={handleImgRoll}
        alt="" />
        <p className='text-center font-semibold text-lg'>Click on Dice to roll</p>
        <button className='block w-[100%] border-gray-600 border-2 py-2 mt-2'
        onClick={() => setResult(0)}
        >Reset Score</button>
        <button className='block w-[100%] bg-black text-white mt-3 py-2'
        onClick={() => SetSelected(!selected)}
        >Show Rules</button>
      </div>
      <div className={`w-[55%] bg-red-300 p-3 mt-1 ${!selected && 'hidden'}`}>
        <h1 className='font-bold text-3xl mt-2 mb-3'>How to play dice game</h1>
        <p className={`font-semibold text-xl`}>Select any number <br />
          click on dice image <br />
          After clicking on dice number if the number equal to the dice number you will get same points as dice if you get wrong guess then 2 points will be deducted.
        </p>
      </div>
    </div>
    </>
  )
}

export default BodyCon