import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  const TimeOn = useCallback(() => {
    if(!isRunning) setIsRunning(true);
  }, [isRunning]);


  const TimePause = useCallback(() => {
    if(isRunning) setIsRunning(false);
  }, [isRunning]);


  const TimeReset = useCallback(() => {
    setTimer(0);
    setIsRunning(false);
  }, [isRunning]);

  useEffect(() => {
    // setTimeout(TimeOn, 1000)
    if(isRunning){  
      timerRef.current = setInterval(() => {
        setTimer((prev) => (prev+1))
      }, 1000);
    }
    else{
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  return (
    <>
      <div className='container'>
        <h2 className='main-show'>Timer : {timer} sec</h2>
        <div>
        <button onClick={TimeOn} className='btn'>Start</button>
        <button onClick={TimePause} className='btn'>Pause</button>
        <button onClick={TimeReset} className='btn'>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
