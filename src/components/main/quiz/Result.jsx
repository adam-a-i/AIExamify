import React from 'react'
import { useLocation } from 'react-router-dom'
const Result = () => {
    const location = useLocation();
    const {correctAnswers, minutes, seconds} = location.state || {};
  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Correct Answers: {correctAnswers}</p>
      <div className='timer-text'>
                  <span>{String(minutes).padStart(2,'0')}</span>:<span>{String(seconds).padStart(2,'0')}</span>
                </div>
    </div>
  )
}

export default Result