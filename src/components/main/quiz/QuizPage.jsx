import React from 'react'

const QuizPage = ({ quiz }) => {
    if (!quiz || quiz.length === 0) {
      return <p>No quiz data available yet!</p>;
    }
  
    return (
      <div className="quiz">
        <h1>Generated Quiz</h1>
        {console.log(JSON.stringify(quiz, null, 2))}
      </div>
    );
  };
  
  export default QuizPage;
  