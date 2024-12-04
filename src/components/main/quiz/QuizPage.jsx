import React from 'react'
import { useEffect, useState } from 'react';
import Timer from '../../../assets/timer';
import { useStopwatch } from 'react-timer-hook';

const QuizPage = ({ quiz }) => {  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [time, setTime] = useState(0);
  const [explain, setExplain] = useState(false);
  const[isCorrect,setIsCorrect] = useState(null);
  const[lock,setLock] = useState(false);

  const { seconds, minutes, reset } = useStopwatch({ autoStart: true });
  const question = quiz.quiz ? quiz.quiz[currentQuestion] : null;
  

  const handleQuestionChange = () =>{
    setLock(false);
    setIsCorrect(null);
    setSelectedAnswer(null);
    setExplain(false);
    if(currentQuestion <quiz.quiz.length) setCurrentQuestion(currentQuestion+1);
  }

  const checkAnswer = () => {
    setLock(true);
    setExplain(true);
    console.log(selectedAnswer);
    console.log(question.correct_answer);
    const correct = question.correct_answer === selectedAnswer;
    setIsCorrect(correct); 
  }
useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Clean up interval on component unmount or when timer stops
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="quiz">
      <div className="logo">
      <p className='name'>
                <span className='ai'>AI</span>
                <span className='examify'>Examify</span>
            </p>
            </div>
            <div className="question">
            <div className="questionText">
              <div className="questionHeader">
            <div className="questionNumber">
              {
                currentQuestion + 1
              }
              /
              {
                quiz.quiz.length
              }
            </div>
            <div className='timer-wrapper'>
            <div className="timer"><Timer/></div>
                  <div className='timer-text'>
                  <span>{String(minutes).padStart(2,'0')}</span>:<span>{String(seconds).padStart(2,'0')}</span>
                </div>
                
            </div>

            </div>
              <h3>{question.question}</h3>
              <div 
              className={`options ${lock ? 'disabled' : ''}`}
              >
                {question.options.map((option, idx) => {
                  return (
                    <div key={idx}
                    className={`option ${
                      selectedAnswer === option
                        ? isCorrect === null
                          ? 'option-selected'
                          : isCorrect
                          ? 'option-correct'
                          : 'option-wrong'
                        : ''
                    }`}
                     onClick={() => setSelectedAnswer(option)}>
                      {idx===0 && (<div className='alphabet'>A</div>)}
                      {idx===1 && (<div className='alphabet'>B</div>)} 
                      {idx===2 && (<div className='alphabet'>C</div>)} 
                      {idx===3 && (<div className='alphabet'>D</div>)} 
                      <p className='options-text'>{option}</p>
                    </div>
                  );
                })}
                </div>
                <hr />
                { !explain && (<button className='check' onClick={() => checkAnswer()}> Check </button>)}
                <div className="footer">
              {explain && (
                <div className="explanation">
                  <div className="exp">
                  <div className='exp1'>Explanation :) </div> 
                  <div>
                {question.explanation}</div></div>
              <button className='check' onClick={() => handleQuestionChange()}> Next </button></div>
            )}
              </div>
              
            </div>
            </div>
            </div>
  );
};
  
export default QuizPage;
  