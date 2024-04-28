import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import quizQuestions from '../data/quizData';

const QuizPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [questionData, setQuestionData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        const questionIndex = parseInt(id, 10) - 1;
        if (questionIndex >= 0 && questionIndex < quizQuestions.length) {
            setQuestionData(quizQuestions[questionIndex]);
            setIsCorrect(null);
            setSelectedOption(null);
        }
    }, [id]);

    const handleOptionClick = (option, index) => {
        setSelectedOption(index);
        setIsCorrect(null);
    };

    const checkAnswer = () => {
        if (selectedOption !== null) {
            const correctAnswer = questionData.answer;
            setIsCorrect(selectedOption === parseInt(correctAnswer, 10) - 1);
        }
    };

    const goToNextQuestion = () => {
        let nextId = parseInt(id, 10) + 1;
        if (nextId <= quizQuestions.length) {
            navigate(`/quiz/${nextId}`);
        } else {
            navigate('/quizresult');
        }
    };

    if (!questionData) {
        return <div>No question found for this ID.</div>;
    }

    return (
        <div className='quiz-container'>
            <div className='quiz-navbar'>
                <Link className='quiz-menu' to="/">FitBlend</Link>
                <Link className='quiz-menu' to="/quiz/1">Take Quiz</Link>
            </div>

            <div className='quiz-content'>
                <div className='quiz-left'>
                    <div className='quiz-left-padding'>
                        <h1 className='que-number'>Question {id}</h1>
                        <p className='que'>What is a key nutritional benefit of Greek yogurt that makes it stand out from regular yogurt?</p>
                    </div>
                </div>
                <div className='quiz-right'>
                    {questionData.options.map((option, index) => (
                        <>
                            <button
                                key={index}
                                className={`quiz-option ${selectedOption === index && isCorrect ? 'correct-outline' : null}`}
                                onClick={() => handleOptionClick(option, index)}
                            >
                                {option}
                            </button>
                            {selectedOption === index && isCorrect === false && (
                                <div className="error-text">Incorrect, please try again.</div>
                            )}
                            {selectedOption === index && isCorrect && (
                                <div className="success-text">Correct! You may proceed to the next question.</div>
                            )}
                        </>
                    ))}
                    <button
                        className={`check-button ${isCorrect ? 'next' : ''}`}
                        onClick={isCorrect ? goToNextQuestion : checkAnswer}
                    >
                        {isCorrect ? 'NEXT' : 'CHECK'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;