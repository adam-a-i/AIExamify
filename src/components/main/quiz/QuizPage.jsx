import React from 'react'
import { useEffect, useState } from 'react';
import Timer from '../../../assets/timer';
const QuizPage = ({ quiz }) => {  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [time, setTime] = useState(0);
  const [explain, setExplain] = useState(false);
  const question = quiz.quiz ? quiz.quiz[currentQuestion] : null;
  const handleQuestionChange = () =>{
    setSelectedAnswer(null);
    setExplain(false);
    if(currentQuestion <quiz.quiz.length) setCurrentQuestion(currentQuestion+1);
  }

  const checkAnswer = () => {
    setExplain(true);
    console.log(selectedAnswer);
    console.log(question.correct_answer);
    if(question.correct_answer == selectedAnswer){
      console.log("correct!");
    }
    else{
      console.log("falsdee");
      
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
              <p className='time'>
                {
                  time
                }
              </p>
              <Timer/>
            </div>
            </div>
              <h3>{question.question}</h3>
              <div className="options">
                {question.options.map((option, idx) => {
                  return (
                    <div key={idx} 
                    className={`option ${selectedAnswer === option ? 'option-selected' : ''}`}
                     onClick={() => setSelectedAnswer(option)}>
                      {idx===0 && (<div className='alphabet'>A</div>)}
                      {idx===1 && (<div className='alphabet'>B</div>)} 
                      {idx===2 && (<div className='alphabet'>C</div>)} 
                      {idx===3 && (<div className='alphabet'>D</div>)} 
                      <p className='options-text'>{option}</p>
                    </div>
                  );
                })}
                <hr />
                { !explain && (<button className='check' onClick={() => checkAnswer()}> Check </button>)}
                <div className="footer">
              {explain && (
                <div className="explanation">
              <p>Explanation :0 </p> 
              <p>
              {question.explanation}</p>
              <button className='check' onClick={() => handleQuestionChange()}> Next </button></div>
            )}
              </div>
              </div>
            </div>
            </div>
            </div>
  );
};
  
  export default QuizPage;
  