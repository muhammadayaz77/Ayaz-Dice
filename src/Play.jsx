import HeadCon from './HeadCon';
import BodyCon from './BodyCon';
import { useState } from 'react';
// import {PacmanLoader} from 'react-spinners'
{/* <PacmanLoader color='red' /> */}
function Play() {
  let [num,SetNum] = useState(0);
  let [roll,setRoll] = useState(1);
  let [result,setResult] = useState(0);
  return (
    <>
   <HeadCon num={num} SetNum={SetNum} result={result}></HeadCon>
   <BodyCon roll={roll} setRoll={setRoll} result={result} setResult={setResult} num={num}></BodyCon>
    </>
  )
}

export default Play