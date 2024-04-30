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
    const [answerChecked, setAnswerChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        const index = questionNumber - 1;
        if (index >= 0 && index < quizQuestions.length) {
            setCurrentQuestion(quizQuestions[index]);
            setSelected(null);
            setAnswerChecked(false);
            setIsCorrect(null);
        }
    }, [id, questionNumber]);

    const handleOptionSelect = (index) => {
        console.log(index, quizQuestions[questionNumber - 1].answer);
        setSelected(index);
        setAnswerChecked(false);
        setIsCorrect(null);
    };

    const handleCheckAnswer = () => {
        const correct = selected === currentQuestion.answer;
        setIsCorrect(correct);
        setAnswerChecked(true);
        if (correct) {
            setScore(prevScore => prevScore + 1);
        }
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
                        <p className='que'>{quizQuestions[id - 1]['question']}</p>
                    </div>
                </div>

                <div className='quiz-right'>
                    {currentQuestion.options.map((option, index) => (
                        <>
                            <button
                                key={index}
                                className={`quiz-option ${answerChecked && index === quizQuestions[questionNumber - 1].answer && 'quiz-option-correct'}`}
                                onClick={() => handleOptionSelect(index)} disabled={answerChecked}>
                                {option}
                            </button>

                            {selected === index && isCorrect === false && (
                                <div className="error-text">Incorrect</div>
                            )}

                            {answerChecked && index === quizQuestions[questionNumber - 1].answer && isCorrect !== true && (
                                <div className="success-text">This is the correct answer!</div>
                            )}

                            {selected === index && isCorrect && (
                                <div className="success-text">Correct!</div>
                            )}
                        </>
                    ))}

                    {!answerChecked && (
                        <button className='check-button' onClick={handleCheckAnswer} disabled={selected === null}>Check</button>
                    )}

                    {answerChecked && (
                        <button className='next-button' onClick={handleNextQuestion}>Next</button>
                    )}
                </div>

            </div>
            <progress className="quiz-progress" value={questionNumber} max={quizQuestions.length}></progress>
        </div>
    );
};

export default QuizPage;