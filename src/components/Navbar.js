import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='navbar-menu' to="/">FitBlend</Link>
            <Link className='navbar-menu' to="/quiz/1">Take Quiz</Link>
        </nav>
    );
};

export default Navbar;