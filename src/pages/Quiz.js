import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import quizQuestions from '../data/quizData'

const QuizPage = () => {
    const { id } = useParams();

    const [que, setQue] = useState(null);

    useEffect(() => {
        const queIdx = parseInt(id) - 1;
        if (queIdx >= 0 && queIdx < quizQuestions.length) {
            setQue(quizQuestions[queIdx]);
        } else {
            setQue(null);
        }
    }, [id]);

    const handleOptionClick = (option) => {
        console.log(option);
    };

    if (!que) {
        return <div>No smoothie found for this ID.</div>;
    }

    return (

        <div className='quiz-container'>
            <div className='quiz-question-container'>
                <h1 className='question-number'>Question {id}</h1>
                <p className='question'>{que.question}</p>
            </div>

            <div className='quiz-options-container'>
                {que.options.map((option, index) => (
                    <button
                        key={index}
                        className='quiz-option'
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuizPage;
