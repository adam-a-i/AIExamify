import React from 'react'
import { useEffect } from 'react';
const QuizPage = ({ quiz }) => {  
  
  const fakeQuiz = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct_answer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      correct_answer: "Paris",
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct_answer: "JavaScript",
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "50°C", "200°C", "300°C"],
      correct_answer: "100°C",
    },
  ];
  
    return (
      <div className="quiz">
        <h1>Generated Quiz</h1>
        {  console.log(quiz.quiz)}
        {quiz.quiz.map((question) => { // quiz.quiz bc quiz is being store in a array called quiz with our quiz array inside of it
          console.log(question)
          console.log(question.question)
          question.options.map((option) => {
            console.log(option)
          })
          console.log(question.correct_answer)
          
        })}
      </div>
    );
  };
  
  export default QuizPage;
  