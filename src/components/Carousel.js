import React, { useState } from 'react';

const TextCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const texts = [
        "Welcome to FitBlend - Start your journey towards a healthier lifestyle!",
        "Discover Delicious Protein Smoothies - Power your day with our recipes.",
        "Join Our Community - Connect, share, and learn more about healthy living."
    ];

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="text-slide">{texts[activeIndex]}</div>
            <div className="carousel-dots">
                {texts.map((_, index) => (
                    <span
                        key={index}
                        className={`dot${activeIndex === index ? ' active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TextCarousel;
