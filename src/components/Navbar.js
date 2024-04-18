import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="nav">
            <div className="nav_logo">
                <Link to="/">SmoothiesMania</Link>
            </div>
            <Link className="nav_button" to="/quiz/1">Quiz Me</Link>
        </nav>
    );
};

export default Navbar;