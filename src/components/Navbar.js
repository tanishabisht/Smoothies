import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="nav">
            <div className="nav_logo">
                <Link to="/">SmoothiesMania</Link>
            </div>
            <Link to="/lesson/1">Greek Yogurt Smoothie</Link>
            <Link to="/lesson/2">Peanut Butter Power Smoothie</Link>
            <Link to="/lesson/3">Silken Tofu Berry Blend</Link>
            <Link to="/lesson/4">Quinoa Fruit Fusion</Link>
            <Link to="/lesson/5">Cottage Cheese Citrus Shake</Link>
            <Link className="nav_button" to="/quiz/1">Quiz Me</Link>
        </nav>
    );
};

export default Navbar;