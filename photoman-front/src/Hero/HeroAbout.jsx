import React from "react";
import './Hero.css'
import goodHand from '../assets/GoodHand.webp'

function HeroAbout(){
    return(
        <section className="hero-page">
            <div className="hero-page-box">
                <div className="hero-page-text">
                    <h2>Who am I?</h2>
                    <h3>Hi Everyone! I am Antonii Bondar, a Ukrainian in Australia. Currently, I am working as a freelancer, but I am also looking for a team that I can join. I have finished my studies and, in addition - a bunch of courses, so I am ready for new achievements!</h3>
                    <h4 className="quote">&nbsp;&nbsp;&nbsp;--"I believe that work should bring pleasure as a result of the process, because it is pleasure that makes people develop involuntarily and constantly improve their results"--</h4>
                </div>
                <div className="hero-about-image">
                    <img src={goodHand} alt="good hand" />
                </div>
            </div>
        </section>
    )
}

export default HeroAbout;