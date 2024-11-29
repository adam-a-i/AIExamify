import Main from "./components/main/Main";
import Quiz from "./components/main/quiz/QuizPage";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [quiz, setQuiz] = useState([]);
  return (
    
      <Router>
      <div className="container">
        
        <Routes>
        <Route path="/" element={<Main setQuiz={setQuiz} />} /> 
        <Route path="/quiz" element={<Quiz quiz={quiz} />} /> 
        </Routes>
      </div>
      </Router>
  );
}

export default App;