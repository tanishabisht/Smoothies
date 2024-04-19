import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
            <div className='quiz-question-container'>
                <h1 className='question-number'>Question {id}</h1>
                <p className='question'>{questionData.question}</p>
            </div>

            <div className='quiz-options-container'>
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
    );
};

export default QuizPage;

