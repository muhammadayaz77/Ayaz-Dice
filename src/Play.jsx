import HeadCon from './HeadCon';
import BodyCon from './BodyCon';
import { useEffect, useState } from 'react';
import {PacmanLoader} from 'react-spinners'
function Play() {
  let [num,SetNum] = useState(0);
  let [roll,setRoll] = useState(1);
  let [result,setResult] = useState(0);
  let [loader,SetLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoader(false);
    },3000)
  })
  return (
    <>
    {
      loader ? 
      <div className='h-screen flex justify-center items-center'>
        <PacmanLoader color='red' />
      </div>
      :
      <>
   <HeadCon num={num} SetNum={SetNum} result={result}></HeadCon>
   <BodyCon roll={roll} setRoll={setRoll} result={result} setResult={setResult} num={num}></BodyCon>
      </>
    }
    </>
  )
}

export default Play