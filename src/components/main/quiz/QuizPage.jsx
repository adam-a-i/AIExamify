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
                      {idx===0 && (<p>A</p>)}
                      {idx===1 && (<p>B</p>)} 
                      {idx===2 && (<p>C</p>)} 
                      {idx===3 && (<p>D</p>)} 
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
  