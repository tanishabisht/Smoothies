import React from 'react';
import { Link } from 'react-router-dom'
import Smoothie1 from '../images/main-smoothie1.png'
import Smoothie2 from '../images/main-smoothie2.png'
import Smoothie3 from '../images/main-smoothie3.png'

const HomePage = () => {
    return (
        <div className='fitblend-home'>
            <div className='fitblend-padding'>
                <div className='fitblend-navbar'>
                    <Link className='fitblend-menu' to="/">FitBlend</Link>
                    <Link className='fitblend-menu' to="/quiz/1">Take Quiz</Link>
                </div>

                <div className='home-content'>
                    <h1 className='home-heading'>FitBlend</h1>
                    <h2 className='home-description'>Unlock the secret to a healthier lifestyle with FitBlend, your ultimate destination for protein-rich smoothies.</h2>
                    <div className='smoothie-gallery'>
                        <Link className='smoothie-image' to='/lesson/1'>
                            <img src={Smoothie1} alt='Protein Smoothie 1' />
                        </Link>
                        <Link className='smoothie-image' to='/lesson/2'>
                            <img src={Smoothie2} alt='Protein Smoothie 2' />
                        </Link>
                        <Link className='smoothie-image' to='/lesson/3'>
                            <img src={Smoothie3} alt='Protein Smoothie 3' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
