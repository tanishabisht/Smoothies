import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SmoothiesNavbar } from '../components'
import smoothiesData from '../data/smoothiesData'

const getSmoothieById = (smoothies, id) => {
    const smoothie = smoothies.find(smoothie => smoothie.id === id);
    return smoothie ? smoothie : 'Smoothie not found';
}

const NUMBER_OF_SMOOTHIES = 3

const LessonPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const smoothieNumber = parseInt(id, 10);
    const [smoothie, setSmoothie] = useState(getSmoothieById(smoothiesData, smoothieNumber));

    // Fun Fact Carousel
    const [funfactIndex, setFunfactIndex] = useState(0);

    const [animate, setAnimate] = useState(false);
    const handleDotClick = (index) => {
        setFunfactIndex(index);
    };

    // Smoothie Page Change
    const goToNextSmoothie = () => {
        if (smoothieNumber < NUMBER_OF_SMOOTHIES) {
            navigate(`/smoothie/${smoothieNumber + 1}`, { replace: true });
            window.location.reload();
        } else {
            navigate(`/quiz/1`, { replace: true });
        }
    };

    const handleIngredientClick = (index) => {
        setFunfactIndex(index)
    }

    return (
        <div className='smoothie-view' style={{ backgroundImage: `url(${smoothie.image})` }}>

            <SmoothiesNavbar />

            <div className="funfacts-section">
                <div className='funfact-details' key={funfactIndex}>
                    <span className='funfact-number' style={{ color: smoothie.color }}>{smoothie.ingredients[funfactIndex]['number']}</span>
                    <h1 className='funfact-title'>{smoothie.ingredients[funfactIndex]['name']}</h1>
                    <p className='funfact-desc'>{smoothie.ingredients[funfactIndex]['fact']}</p>
                </div>
                <div className="funfact-navigation">
                    {smoothie.ingredients.map((_, index) => (
                        <span
                            key={index}
                            className={`dot${funfactIndex === index ? ' active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className='ingredients-list'>
                {smoothie.ingredients.map((ingredient, index) => (
                    <div key={index} className='ingredient-detail' onClick={() => handleIngredientClick(index)}>
                        <h2 className='ingredient-title'>{ingredient.name}</h2>
                        <p className='ingredient-info'>{ingredient.amount}</p>
                    </div>
                ))}
            </div>

            {smoothieNumber < NUMBER_OF_SMOOTHIES ? (
                <button className='next-smoothie-btn' onClick={goToNextSmoothie}>
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>
            ) : (
                <button className='start-quiz-btn' onClick={() => navigate('/quiz/1')}>
                    Quiz Me
                </button>
            )}

        </div>
    );
}

export default LessonPage;
