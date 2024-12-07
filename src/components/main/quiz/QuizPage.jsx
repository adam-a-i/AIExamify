import React from 'react'
import { useEffect, useState } from 'react';
import Timer from '../../../assets/timer';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { txt } from './recs';
// implement empty answer error message
const QuizPage = ({ quiz }) => {  
  const [correctAnswers, setCorrectAnswers] = useState(0); // keeps track of corrrect answers
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);// array to use incorrect answers for yt rec
  const navigate = useNavigate();
  const [emptyAnswer, setEmptyAnswer] = useState(false); // checks if empty answer
  const [currentQuestion, setCurrentQuestion] = useState(0); // qs number
  const [selectedAnswer, setSelectedAnswer] = useState(null); // to show styling for selected opt
  const [explain, setExplain] = useState(false); // explanation shows
  const[isCorrect,setIsCorrect] = useState(null);  // correct answer
  const[lock,setLock] = useState(false); // lock screen after answering

  const { seconds, minutes, reset } = useStopwatch({ autoStart: true });
  const question = quiz.quiz ? quiz.quiz[currentQuestion] : null; // picks qs based on its number
  

  const handleQuestionChange = () =>{ // resets some question properties and decides whether you move to result pg or not
    setEmptyAnswer(false);
    setLock(false);
    setIsCorrect(null);
    setSelectedAnswer(null);
    setExplain(false);
    if(currentQuestion < quiz.quiz.length - 1){
           setCurrentQuestion(currentQuestion+1)
          }
    else{
      const handleNavigation = async () => {
        const rec = await txt(quiz.quiz, incorrectAnswers); // sends quiz and incorrect answers to backend for recommendation generation
        navigate('/result', {
          state: { rec, correctAnswers, minutes, seconds, incorrectAnswers },
        });
      };
      handleNavigation();
    }
  }

  const checkAnswer = () => {
    if(!selectedAnswer){
       setEmptyAnswer(true); // if no answer provided
      return;
  }
    setLock(true);
    setExplain(true);
    const correct = question.correct_answer === selectedAnswer; // returns bool for ans result
    setIsCorrect(correct); 
    if(correct){
      setCorrectAnswers(correctAnswers + 1); // updates correct answer for result pg
    }
    else{ // tracks incorrect qs for yt reccomendation
      setIncorrectAnswers([...incorrectAnswers, question]);
    }
  }
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
              className={`options ${lock ? 'disabled' : ''}`} // changes classname if qs has already been solved and locks
              >
                {question.options.map((option, idx) => {
                  return (
                    <div key={idx}
                    className={`option ${ // does several thngs like higlhigfht selected answer, show red/green for qs result
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
                { !explain && (<div className="bottom"> 
                  {emptyAnswer && (<p className='empty shaking'>Please select a valid choice :&lt; </p>)}
                  <div className="check-button-wrapper">
                            <button className="check" onClick={() => checkAnswer()}>
                              Check
                            </button>
                            </div>
                   </div>)}
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
  