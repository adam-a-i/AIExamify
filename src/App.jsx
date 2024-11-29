import Main from "./components/main/Main";
import Quiz from "./components/main/quiz/QuizPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    
      <Router>
      <div className="container">
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;