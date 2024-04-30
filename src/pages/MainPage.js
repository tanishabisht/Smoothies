import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from '../components'
import Smoothie1 from '../images/main-smoothie1.png'
import Smoothie2 from '../images/main-smoothie2.png'
import Smoothie3 from '../images/main-smoothie3.png'

const HomePage = () => {
    return (
        <div className='home-container'>
            <div className='home-padding'>

                <Navbar />

                <div className='content-wrapper'>
                    <h1 className='home-heading'>FitBlend</h1>
                    <h2 className='home-description'>Unlock the secret to a healthier lifestyle with FitBlend, your ultimate destination to <u>learn protein-rich smoothies</u>.</h2>
                    <div className='gallery'>
                        <Link className='gallery-item' to='/smoothie/1'>
                            <img src={Smoothie1} alt='Greek Yogurt Smoothie' />
                            <span className='item-caption' style={{ backgroundColor: '#d3675f91' }}>Greek Yogurt Smoothie</span>
                        </Link>
                        <Link className='gallery-item' to='/smoothie/2'>
                            <img src={Smoothie2} alt='Silken Tofu Berry Blend' />
                            <span className='item-caption' style={{ backgroundColor: '#6E4E6F91' }}>Silken Tofu Berry Blend</span>
                        </Link>
                        <Link className='gallery-item' to='/smoothie/3'>
                            <img src={Smoothie3} alt='Cottage Cheese Citrus Shake' />
                            <span className='item-caption' style={{ backgroundColor: '#D2754691' }}>Cottage Cheese Citrus Shake</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
