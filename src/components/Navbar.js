import React from "react";
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className='navbar'>
            <Link className='navbar-menu' to="/">FitBlend</Link>
            {!(/\/quiz\/\d+/.test(location.pathname)) && <Link className='navbar-menu' to="/quiz/1">Take Quiz</Link>}
        </nav>
    );
};

export default Navbar;