import React from 'react'
import { useEffect, useState } from 'react';
import Timer from '../../../assets/timer';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
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
  const question = quiz.quiz ? quiz.quiz[currentQuestion] : null;
  

  const handleQuestionChange = () =>{
    setEmptyAnswer(false);
    setLock(false);
    setIsCorrect(null);
    setSelectedAnswer(null);
    setExplain(false);
    if(currentQuestion < quiz.quiz.length - 1){
            console.log(currentQuestion);
           setCurrentQuestion(currentQuestion+1)
           console.log(currentQuestion);
          }
    else{
      console.log('hi');
      navigate('/result' , {
        state: {correctAnswers,minutes, seconds},
      });
    }
  }

  const checkAnswer = () => {
    if(!selectedAnswer){
       setEmptyAnswer(true);
      return;
  }
    setLock(true);
    setExplain(true);
    console.log(selectedAnswer);
    console.log(question.correct_answer);
    const correct = question.correct_answer === selectedAnswer;
    setIsCorrect(correct); 
    if(correct){
      setCorrectAnswers(correctAnswers + 1);
    }
    else{
      setIncorrectAnswers([...incorrectAnswers, question]);
      console.log(incorrectAnswers);
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
  