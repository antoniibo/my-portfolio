import React from "react";
import mouseHand from '../assets/mouseHand.webp'
import './Hero.css'

function HeroProject(){
    return(
        <section className="hero-page">
            
            <div className="hero-page-box">
                <div className="hero-page-text">
                <h2>My Projects</h2>
                    <h3>Welcome to my project showcase, a curated collection 
                    of works that reflect my passion and progress. Each piece 
                    is a testament to my journey, inviting you to explore and find 
                    inspiration. Enjoy the discovery of creativity and innovation 
                    that awaits within.</h3>
                </div>
                <div className="hero-project-image">
                    <img src={mouseHand} alt="right hand" />
                </div>
            </div>
        </section> 
    )
}

export default HeroProject