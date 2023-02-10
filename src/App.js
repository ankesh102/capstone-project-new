import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/quiz/Play";
import Quizinstructions from "./components/quiz/Quizinstructions";
import QuizSummary from "./components/quiz/QuizSummary";




function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/play/instructions" exact element={<Quizinstructions />} />
        <Route path="/play/Quiz" exact element={<Play />} />
        <Route path="/play/quizsummary" exact element={<QuizSummary />} />

    </Routes>
  );
}

export default App;
