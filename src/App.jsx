import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PromptPage from "./pages/PromptPage";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import History from "./components/core/History";
import Quiz from "./pages/QuizPage";
import TakeQuiz from "./pages/TakeQuiz";

function App() {

  return (
        <Router>
            <Header/>
            <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/prompt" element={<PromptPage/>} />
                  <Route path="/history" element={<History/>}/>
                  <Route path="/quiz" element={<Quiz/>}/>
                  <Route path="/takequiz" element={<TakeQuiz/>} />
            </Routes>
            <Footer/>
        </Router>
  );

}

export default App;
