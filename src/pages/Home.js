import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
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
                <h1>Welcome to SmoothiesMania!!</h1>
                <h2>Ditch the Powder: Go Natural with Your Protein!</h2>
                <p>Why spend more on protein powder when you can get all you need from nature? Not only can excessive intake of protein powders be costly, but it might also lead you to miss out on the whole foods essential for a balanced diet. What's more, too much protein powder could stress your kidneys and liver.</p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button className='main_btn' onClick={onClickLearnBtn}>Teach Me</button>
                    <button className='secondary_btn' onClick={onClickQuizBtn}>Quiz Me</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
