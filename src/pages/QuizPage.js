import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import quizQuestions from '../data/quizData';
import { Navbar } from '../components'

const QuizPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const questionNumber = parseInt(id, 10)

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const index = questionNumber - 1;
        if (index >= 0 && index < quizQuestions.length) {
            setCurrentQuestion(quizQuestions[index]);
            setSelected(null);
        }
    }, [id]);

    const handleOptionSelect = (index) => {
        console.log(index, quizQuestions[questionNumber - 1].answer);
        setSelected(index);
    };

    const handleNextQuestion = () => {
        let nextId = questionNumber + 1;
        if (nextId <= quizQuestions.length) {
            if (selected === quizQuestions[questionNumber - 1].answer) {
                setScore(prevScore => prevScore + 1);
            }
            navigate(`/quiz/${nextId}`);
        } else {
            navigate(`/results/${score}`);
        }
    };

    if (!currentQuestion) {
        return <div>No question available for this ID.</div>;
    }

    return (
        <div className='quiz-container'>

            <Navbar />

            <div className='quiz-content'>

                <div className='quiz-left'>
                    <div className='quiz-left-padding'>
                        <h1 className='que-number'>Question {id}</h1>
                        <p className='que'>What is a key nutritional benefit of Greek yogurt that makes it stand out from regular yogurt?</p>
                    </div>
                </div>

                <div className='quiz-right'>
                    {currentQuestion.options.map((option, index) => (
                        <button key={index} className='quiz-option' onClick={() => handleOptionSelect(index)}>
                            {option}
                        </button>
                    ))}
                    <button className='next-button' onClick={handleNextQuestion}>Next</button>
                </div>

            </div>
        </div>
    );
};

export default QuizPage;