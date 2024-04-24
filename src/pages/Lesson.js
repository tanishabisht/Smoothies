import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import smoothiesData from '../data/smoothiesData'

const LessonPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const lessonNumber = parseInt(id, 10);

    const [smoothie, setSmoothie] = useState(null);
    const [activeFunFact, setActiveFunFact] = useState('');

    const handleIngredientClick = (fact) => {
        setActiveFunFact(fact);
    };

    const handleOutsideClick = () => {
        setActiveFunFact('');
    };

    const goToNextLesson = () => {
        if (lessonNumber < 5) {
            navigate(`/lesson/${lessonNumber + 1}`);
        } else {
            navigate(`/quiz/1`);
        }
    };

    useEffect(() => {
        const smoothieIndex = parseInt(id) - 1;
        if (smoothieIndex >= 0 && smoothieIndex < smoothiesData.length) {
            setSmoothie(smoothiesData[smoothieIndex]);
        } else {
            setSmoothie(null);
        }
    }, [id]);

    if (!smoothie) {
        return <div>No smoothie found for this ID.</div>;
    }

    return (
        <div className='smoothie-container'>
            <div className={`smoothie-content-container smoothie-id-${smoothie.id}`}>
                <div className='smoothie-details' onClick={handleOutsideClick}>
                    <h1 className='smoothie-title'>{smoothie.name}</h1>
                    <p className='smoothie-content'>{smoothie.content}</p>
                    <p className='smoothie-drinking-time'>Best Time to Drink: {smoothie.besttime}</p>

                    <div className='smoothie-ingredient-funfact'>{activeFunFact}</div>
                </div>

                <div className='smoothie-ingredients'>
                    {smoothie.ingredients.map((ingredient, index) => (
                        <div className='ingredient-detail' key={index} onClick={() => handleIngredientClick(ingredient.fact)}>
                            <span className='ingredient-detail-name'>{ingredient.name}</span>
                            <br />
                            <span className='ingredient-detail-amount'>{ingredient.amount}</span>
                        </div>
                    ))}
                </div>

            </div>

            <div className='smoothie-image-container' onClick={handleOutsideClick}>
                <img src={smoothie.image} alt={`${smoothie.name} image`} />
            </div>



            {lessonNumber < 5 ? (
                <button className='button-right' onClick={goToNextLesson}>
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
