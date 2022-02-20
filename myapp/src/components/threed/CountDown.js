import React, { useState } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './CountDown.css';


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Congrats</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  


const CountDown = () => {
    const [timeer, setTimeer] = useState(600);
    const [key, setKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
  return (
      <>
      <input type="number" onChange={(e) => setTimeer(e.target.value)}></input>
        <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={timeer?timeer:100}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <button onClick={() => setKey((prevKey) => prevKey + 1)}>
          Restart Timer
        </button>
        <button onClick={() => setIsPlaying((prev) => !prev)}>
          Start/Pause
        </button>
    </>
  )
}

export default CountDown