import React from 'react'
import { useEffect } from 'react';
const QuizPage = ({ quiz }) => {  
  
  
  return (
    <div className="quiz">
      <h1>Generated Quiz</h1>
      <div className="question">
        {quiz.quiz?.map((question, index) => { // ensure quiz.quiz is defined
          return (
            <div key={index} className="questionText">
              <h3>{question.question}</h3>
              <div className="options">
                {question.options.map((option, idx) => {
                  return (
                    <div key={idx} className="option">
                      {idx===0 && (<div className='alphabet'>A</div>)}
                      {idx===1 && (<div className='alphabet'>B</div>)} 
                      {idx===2 && (<div className='alphabet'>C</div>)} 
                      {idx===3 && (<div className='alphabet'>D</div>)} 
                      <p className='options-text'>{option}</p>
                    </div>
                  );
                })}
              </div>
              <p>Correct Answer: {question.correct_answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
  
  export default QuizPage;
  