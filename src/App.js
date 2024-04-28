import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, LessonPage, QuizPage, QuizResultPage } from './pages'
import { Layout } from './components'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quizresult" element={<QuizResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
