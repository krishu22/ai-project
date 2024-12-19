import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultDisplay from "./components/core/ResultDisplay";

function App() {

  return (
        <Router>
            <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/result" element={<ResultDisplay/>} />
            </Routes>
        </Router>
  );

}

export default App;
