import './HeroStyle.css'
import HeroImg from '../assets/intro-bg.jpg'

import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='hero-img' src={HeroImg} alt="Hero Image" />
        </div>
        <div className="content">
            <p>HI, I'M TANVIRUL ISLAM</p>
            <h1> <span>React</span> Developer.</h1>
            <div>
                <Link to="/project" className='btn'> Project --{'>'} </Link>
                <Link to="/contact" className='btn btn-light'> Contact --{'>'} </Link>
            </div>
        </div>
    </div>
  );
};

export default Hero;