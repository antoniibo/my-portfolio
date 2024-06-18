import React, { useState, useEffect } from 'react';
import './Hero.css'
import hiHand from '../assets/hiHand.png'

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

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY;
                const newOpacity = texts.map((text, i) => {
                    const textPosition = i * 220; 
                    const range = 440; 
                    const textOpacity = i === texts.length - 1 && scrollPosition > textPosition
                        ? 1 
                        : Math.max(0, 1 - Math.abs(scrollPosition - textPosition) / range);
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
            </div>
        </section>
    );
}

export default Hero;

{/* <div className="hero">
            <h1>Welcome here!
                I am Antonii Bondar, 
                Software Developer, 
                Freelancer, 
                Designer, 
                and just a person with a taste for style
            </h1>
            <img src={hand} alt="hello hand" />
            {/* <img src={face} alt="my face" />
            <img src={programmer} alt="programmer face" />
            <img src={happy} alt="happy face" />
            <img src={designer} alt="crazy face" />
            <img src={tongueFace} alt="face with tongue" /> */}

 {/*       </div> */}