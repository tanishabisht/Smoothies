import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from '../components'
import Smoothie1 from '../images/main-smoothie1.png'
import Smoothie2 from '../images/main-smoothie2.png'
import Smoothie3 from '../images/main-smoothie3.png'

const HomePage = () => {
    return (
        <div className='fitblend-home'>
            <div className='fitblend-padding'>
                <Navbar />

                <div className='home-content'>
                    <h1 className='home-heading'>FitBlend</h1>
                    <h2 className='home-description'>Unlock the secret to a healthier lifestyle with FitBlend, your ultimate destination for protein-rich smoothies.</h2>
                    <div className='smoothie-gallery'>
                        <Link className='smoothie-image' to='/smoothie/1'>
                            <img src={Smoothie1} alt='Greek Yogurt Smoothie' />
                            <span className='smoothie-name' style={{ backgroundColor: '#d3675f91' }}>Greek Yogurt Smoothie</span>
                        </Link>
                        <Link className='smoothie-image' to='/smoothie/2'>
                            <img src={Smoothie2} alt='Silken Tofu Berry Blend' />
                            <span className='smoothie-name' style={{ backgroundColor: '#6E4E6F91' }}>Silken Tofu Berry Blend</span>
                        </Link>
                        <Link className='smoothie-image' to='/smoothie/3'>
                            <img src={Smoothie3} alt='Cottage Cheese Citrus Shake' />
                            <span className='smoothie-name' style={{ backgroundColor: '#D2754691' }}>Cottage Cheese Citrus Shake</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
