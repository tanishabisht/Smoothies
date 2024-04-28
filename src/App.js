import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, SmoothiePage, QuizPage, QuizResultPage } from './pages'
import { Layout } from './components'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/smoothie/:id" element={<SmoothiePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quizresult" element={<QuizResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
