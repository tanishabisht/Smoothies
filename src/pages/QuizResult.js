import React from 'react';
import { useParams } from 'react-router-dom'
import { Navbar } from '../components'

const QuizResultPage = () => {
    const { score } = useParams();

    return (
        <div className='home-container'>
            <div className='home-padding'>
                <Navbar />
                <div className='content-wrapper'>
                    <div className='score-container'>
                        <div className='score'>{score} / 5</div>
                    </div>
                    <h1 className='home-heading'>Congratulationsss</h1>
                    <h2 className='home-description'>You now know Protein Power Ingredients for your smoothie!</h2>
                </div>
            </div>
        </div>
    );
}

export default QuizResultPage;
