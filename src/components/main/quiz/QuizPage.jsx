import React from 'react'
import { useEffect, useState } from 'react';
import Timer from '../../../assets/timer';
const QuizPage = ({ quiz }) => {  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const question = quiz.quiz ? quiz.quiz[currentQuestion] : null;
  
  const handleQuestionChange = () =>{
    if(currentQuestion <quiz.quiz.length) setCurrentQuestion(currentQuestion+1);
  }

  const checkAnswer = () => {
    console.log(selectedAnswer.option);
    console.log(question.correct_answer);
    if(question.correct_answer == selectedAnswer.option){
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
            <div className='timer-wrapper'>
              <Timer/>
            </div>
              <h3>{question.question}</h3>
              <div className="options">
                {question.options.map((option, idx) => {
                  return (
                    <div key={idx} className="option" onClick={() => setSelectedAnswer({option})}>
                      {idx===0 && (<div className='alphabet'>A</div>)}
                      {idx===1 && (<div className='alphabet'>B</div>)} 
                      {idx===2 && (<div className='alphabet'>C</div>)} 
                      {idx===3 && (<div className='alphabet'>D</div>)} 
                      <p className='options-text'>{option}</p>
                    </div>
                  );
                })}
                <hr />
                <button className='check' onClick={() => checkAnswer()}> Check </button>
              </div>
              <p>Correct Answer: {question.correct_answer}</p>
            </div>
            </div>
            </div>
  );
};
  
  export default QuizPage;
  