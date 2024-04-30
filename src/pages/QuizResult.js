import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Navbar } from '../components'

const QuizResultPage = () => {
    const { score } = useParams();
    const navigate = useNavigate();

    const onClickLearnBtn = () => {
        navigate(`/smoothie/1`);
    }

    const onClickQuizBtn = () => {
        navigate(`/quiz/1`);
    }

    return (
        <div className='home-container'>
            <div className='home-padding'>
                <Navbar />
                <div className='content-wrapper'>
                    <div className='score-container'>
                        <div className='score'>{score} / 5</div>
                    </div>

                    {score < 3 && (
                        <>
                            <h1 className='home-heading'>Good Try!</h1>
                            <h2 className='home-description'>You're getting there. Keep practicing to learn more about Protein Power Ingredients for your smoothie!</h2>
                        </>
                    )}

                    {score == 3 && (
                        <>
                            <h1 className='home-heading'>Congratulations!</h1>
                            <h2 className='home-description'>You know the basics of Protein Power Ingredients for your smoothie!</h2>
                        </>
                    )}

                    {score > 3 && (
                        <>
                            <h1 className='home-heading'>Outstanding Performance!</h1>
                            <h2 className='home-description'>You're a master of Protein Power Ingredients for your smoothie!</h2>
                        </>
                    )}

                    <div className='btn-container'>
                        <button className='btn-main' onClick={onClickLearnBtn}>Learn Again</button>
                        <button className='btn-secondary' onClick={onClickQuizBtn}>Quiz Me Again</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default QuizResultPage;
