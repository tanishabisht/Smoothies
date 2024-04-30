import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const SmoothiesNavbar = () => {

    const navigate = useNavigate()

    const handleRefresh = (url) => {
        navigate(url)
        navigate(0)
    };

    return (
        <>
            <nav className='smoothie-navbar'>
                <Link className='smoothie-menu' to="/">FitBlend</Link>
                <div>
                    <Link className='smoothie-menu-main' to="/smoothie/1" onClick={(e) => handleRefresh('/smoothie/1')}>01 Greek Yogurt Smoothie</Link>
                    <Link className='smoothie-menu-main' to="/smoothie/2" onClick={(e) => handleRefresh('/smoothie/2')}>02 Silken Tofu Berry Blend</Link>
                    <Link className='smoothie-menu-main' to="/smoothie/3" onClick={(e) => handleRefresh('/smoothie/3')}>03 Cottage Cheese Citrus Shake</Link>
                </div>
                <Link className='smoothie-menu' to="/quiz/1">Quiz Me</Link>
            </nav>
            <hr />
        </>
    );
};

export default SmoothiesNavbar;