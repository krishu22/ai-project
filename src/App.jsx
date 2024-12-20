import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PromptPage from "./pages/PromptPage";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AboutUs from "./pages/AboutUs";
import History from "./components/core/History";

function App() {

  return (
        <Router>
            <Header/>
            <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/prompt" element={<PromptPage/>} />
                  <Route path="/about" element={<AboutUs/>}/>
                  <Route path="/history" element={<History/>}/>
            </Routes>
            <Footer/>
        </Router>
  );

}

export default App;
