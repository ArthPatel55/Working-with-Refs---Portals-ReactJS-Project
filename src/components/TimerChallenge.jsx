import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({title,targetTime}){
  
  const dialog =useRef();
  const timer = useRef();

  const[timerExpired , setTimerExpired]=useState(false);
  const[timerStarted,setTimerStarted]=useState(false);
  
  function handleStart(){
    timer.current = setTimeout(()=>{
    setTimerExpired(true);
    dialog.current.open();
  },targetTime*1000);

  setTimerStarted(true);
}
function handleStop(){
  clearTimeout(timer.current);
}
  return(<>
    <ResultModel ref={dialog} targetTime={targetTime} result="lost" />
   <section className="challenge" >
    <h2>{title}</h2>
    {/* {timerExpired && <p>You Lost!</p>} */}
    <p className="challenge-time">
    {targetTime}Second{targetTime>1?'s':''}
    </p>
    <p>
        <button onClick={timerStarted ? handleStop : handleStart} >{timerStarted ? 'Stop': 'Start'} Challenge</button>
    </p>
    <p className={timerStarted ? 'active' : undefined }>
        { timerStarted ? 'Time is running...' : 'Timer Inactive' }
    </p>
  </section>
  </>);
}
