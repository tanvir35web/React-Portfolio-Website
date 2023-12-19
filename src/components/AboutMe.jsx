import React from 'react'
import { Link } from 'react-router-dom';
import './AboutMeStyle.css'
import aboutMeImg1 from '../assets/react1.jpg'
import aboutMeImg2 from '../assets/react2.webp'

const AboutMe = () => {
  return (
<div className="aboutMe">
    <div className="aboutMe-container">
        <div className="left">
            <h1>Who am I ?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quidem! A alias asperiores rerum, incidunt nemo optio blanditiis ad laudantium!</p>
            <Link to={"/contact"} className='btn'> CONTACT </Link>
        </div>
        <div className="right">
            <div className="aboutMe-img">
                <div className="top">
                <img src={aboutMeImg1} alt="About Me Image" />
                </div>
    
                <div className="bottom">
                <img src={aboutMeImg2} alt="About Me Image" />
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default AboutMe;