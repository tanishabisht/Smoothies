import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SmoothiesNavbar } from '../components'
import smoothiesData from '../data/smoothiesData'

const ingredientData = [
    { name: 'PEANUT BUTTER', amount: '1 tablespoon' },
    { name: 'ROLLED OATS', amount: '2 cups' },
    { name: 'FLAX SEEDS', amount: '1 tablespoon' },
    { name: 'MILK', amount: '1 cup' },
]

const ingredientFunfacts = [
    { number: '01', name: 'PEANUT BUTTER', desc: 'It takes about 540 peanuts to mttle more info.' },
    { number: '02', name: 'ROLLED OATS', desc: 'It takence jar of peanut butter. And little more info.' },
    { number: '03', name: 'FLAX SEEDS', desc: 'It takes about 540 peanuts to make a 12-ounce jar of pe more info.' },
    { number: '04', name: 'MILK', desc: 'It take jar of peanut butter. And little more info.' },
];

const getSmoothieNameById = (smoothies, id) => {
    const smoothie = smoothies.find(smoothie => smoothie.id === id);
    return smoothie ? smoothie.name : 'Smoothie not found';
}

const LessonPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const smoothieNumber = parseInt(id, 10);
    const [smoothieName, setSmoothieName] = useState(getSmoothieNameById(smoothiesData, smoothieNumber));


    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const goToNextSmoothie = () => {
        if (smoothieNumber < 5) {
            navigate(`/lesson/${smoothieNumber + 1}`);
        } else {
            navigate(`/quiz/1`);
        }
    };

    return (
        <div className='smoothie-container'>

            <SmoothiesNavbar id={id} smoothieName={smoothieName} />



            <hr />

            <div className="ingredients-funfact">
                <div className="ingredients-content">
                    <span className='ingredient-number'>{ingredientFunfacts[activeIndex]['number']}</span>
                    <h1 className='ingredient-title'>{ingredientFunfacts[activeIndex]['name']}</h1>
                    <p className='ingredient-desc'>{ingredientFunfacts[activeIndex]['desc']}</p>
                </div>
                <div className="carousel-dots">
                    {ingredientFunfacts.map((_, index) => (
                        <span
                            key={index}
                            className={`dot${activeIndex === index ? ' active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className='ingredients-data'>
                {ingredientData.map(ingredient => (
                    <div className='ingredient'>
                        <h2 className='ingredient-name'>{ingredient.name}</h2>
                        <p className='ingredient-amount'>{ingredient.amount}</p>
                    </div>
                ))}
            </div>

            {smoothieNumber < 5 ? (
                <button className='button-right' onClick={goToNextSmoothie}>
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>
            ) : (
                <button className='button-right' onClick={() => navigate('/quiz/1')}>
                    Quiz Me
                </button>
            )}

        </div>
    );
}

export default LessonPage;
