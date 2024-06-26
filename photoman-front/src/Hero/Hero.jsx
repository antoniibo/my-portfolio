import React, { useState, useEffect } from 'react';
import './Hero.css'
import hiHand from '../assets/hiHand.png'

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
                    <p className="wayer" style={{ opacity: arrowOpacity }}>❯</p>
            </div>
        </section>
    );
}

export default Hero;