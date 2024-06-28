import React, { useState, useEffect } from 'react';
import './Hero.css'
import hiHand from '../assets/hiHand.webp'

const FADE_START_OFFSET = 1600;
const FADE_END_OFFSET = 400;
const TEXT_POSITION_OFFSET = 220;
const TEXT_OPACITY_RANGE = 440;

function Hero() {
    const texts = [
        "Welcome here!",
        "I am Antonii Bondar,",
        "Software Developer,",
        "Freelancer,",
        "Designer,",
        "and just a person with a taste for style"
    ];

    const [opacity, setOpacity] = useState(texts.map((text, i) => (i === 0 ? 1 : i === 1 ? 0.5 : 0)));
    const [arrowOpacity, setArrowOpacity] = useState(1);
    const [mobileImageStyle, setMobileImageStyle] = useState({});
    const[mobileAnimation, setMobileAnimation] = useState({});
    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY;
                const heroSection = document.querySelector('.hero');
                const heroHeight = heroSection.offsetHeight;
                const fadeStart = heroHeight - FADE_START_OFFSET; 
                const fadeEnd = heroHeight - FADE_END_OFFSET; 

                let newArrowOpacity = 1;
                if (scrollPosition > fadeStart) {
                    newArrowOpacity = Math.max(0, 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
                }
                setArrowOpacity(newArrowOpacity);
                const newOpacity = texts.map((text, i) => {
                    const textPosition = i * TEXT_POSITION_OFFSET; 
                    const textOpacity = i === texts.length - 1 && scrollPosition > textPosition
                        ? 1 
                        : Math.max(0, 1 - Math.abs(scrollPosition - textPosition) / TEXT_OPACITY_RANGE);
                    return textOpacity;
                });
                setOpacity(newOpacity);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [texts.length]);
    useEffect(() => {
        const randomizeMobileImagePosition = () => {
            const side = Math.floor(Math.random() * 3);
            let style = {};
            let imgAnimation={};
            const animationKey = Date.now();

            if (side === 0) { // left
                style = {
                    left: 0,
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'rotate(90deg)',
                    top: `${15 + Math.random() * 50}%`
                };
            } else if (side === 1) { // right
                style = {
                    right: 0,
                    left: 'auto',
                    bottom: 'auto',
                    transform: 'rotate(-90deg)',
                    top: `${15 + Math.random() * 50}%`
                };
            } else { // bottom
                style = {
                    bottom: -3,
                    right: 'auto',
                    transform: 'rotate(0deg)',
                    top: 'auto',
                    left: `${15 + Math.random() * 50}%`
                };
            }
            imgAnimation = {
                animation: 'MobileHandAnimation 5s infinite',
                animationKey: animationKey
            };

            setMobileImageStyle(style);
            setMobileAnimation( imgAnimation);
        };

        randomizeMobileImagePosition();
        const intervalId = setInterval(randomizeMobileImagePosition, 5000);

        return () => clearInterval(intervalId);
    }, []);

    // wayer scroll
    const scrollToSection = () =>{
        const section = document.querySelector('.intro-box');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="hero">
            <div className='hero-box'>
                <div className="hero-text">
                    {texts.map((text, i) => (
                        <h1 key={i} style={{ opacity: opacity[i] }}>{text}</h1>
                    ))}
                </div>
                <div className="hero-image">
                    <img src={hiHand} alt="illustration" />
                </div>
                <div className='mobile-image ' style={mobileImageStyle}>
                    <img src={hiHand} alt="illustration" style={mobileAnimation} />
                </div>
                <div className='wayer-box'>
                    <p className="wayer" onClick={scrollToSection} style={{ opacity: arrowOpacity }}>❯</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;