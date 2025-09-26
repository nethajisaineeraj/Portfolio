
import React from 'react';
import './index.css';
import MyImage from '../../images/MyImage.jpg';

const Banner = () => {
    return (
        <section className="banner-section" id="banner">
            <div className="banner-left">
                <div className="banner-title">
                    <span className="banner-title-part-hi"><span className="emoji">👋</span> Hi, I'm</span>
                    <span className="banner-title-part-name">Sai Neeraj Mahanthi</span>
                    <span className="banner-title-part-tagline">Full Stack Developer</span>
                    <span>
                        <span className="banner-title-part-slogan">where the curiosity </span>
                        💡
                        <span className="banner-title-part-slogan"> meets code </span>
                        💻
                        <span className="banner-title-part-slogan">!</span>
                    </span>
                </div>
            </div>
            <div className="banner-right">
                <div className="banner-img-wrapper">
                    <img className="banner-img" src={MyImage} alt="Sai Neeraj Mahanthi" />
                </div>
            </div>
        </section >
    );
};

export default Banner;
