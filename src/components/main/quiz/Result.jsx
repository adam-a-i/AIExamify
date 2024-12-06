import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' // to receeive props from prev page
import Confetti from 'react-confetti';


const Result = () => {
    const location = useLocation();
    const {correctAnswers, minutes, seconds} = location.state || {};

    const [confettiPieces, setConfettiPieces] = useState(300);
    useEffect(() => {
      const interval = setInterval(() => {
        setConfettiPieces((prev) => Math.max(prev - 10, 0)); // reduce pieces of confetti
      }, 200);
      return () => clearInterval(interval);
    }, []);
    console.log('Confetti Pieces:', confettiPieces);
  return (
    <>
      {<Confetti numberOfPieces={confettiPieces} width={window.innerWidth} height={document.documentElement.scrollHeight} />}
      <h1>Quiz Results</h1>
      <p>Correct Answers: {correctAnswers}</p>
      <div className='timer-text'>
                  <span>{String(minutes).padStart(2,'0')}</span>:<span>{String(seconds).padStart(2,'0')}</span>
                </div>
    </>
  )
}

export default Result