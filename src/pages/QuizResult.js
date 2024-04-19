import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizResultPage = () => {
    const navigate = useNavigate();

    const onClickLearnBtn = () => {
        navigate(`/lesson/1`);
    }

    const onClickQuizBtn = () => {
        navigate(`/quiz/1`);
    }

    return (
        <div className='home_container'>
            <div className='home_padding'>
                <h1>Congratulationsss!!!</h1>
                <h2>You now know Protein Power Ingredients for your smoothie!</h2>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button className='main_btn' onClick={onClickLearnBtn}>Teach Me</button>
                    <button className='secondary_btn' onClick={onClickQuizBtn}>Quiz Me Again</button>
                </div>
            </div>
        </div>
    );
}

export default QuizResultPage;
