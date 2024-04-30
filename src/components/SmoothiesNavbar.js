import React from "react";
import { Link } from 'react-router-dom'

const SmoothieNavbar = ({ id, smoothieName }) => {
    return (
        <nav className='smoothie-navbar'>
            <Link className='smoothie-menu' to="/">FitBlend</Link>
            <p className="smoothie-menu-no-underline">{id.padStart(2, '0')} / 03 {smoothieName}</p>
            <Link className='smoothie-menu' to="/quiz/1">Quiz Me</Link>
        </nav>
    );
};

export default SmoothieNavbar;