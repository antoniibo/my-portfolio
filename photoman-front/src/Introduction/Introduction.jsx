import React from "react";
import './Introduction.css'
import introPhoto from '../assets/IntroVar1.webp'
import { Link } from "react-router-dom";

function Introduction(){
    return(
        <section className="intro-box">
            <h2 className="section-header">Introducing myself</h2>
            <div className="intro-flex">
                <div className="text-box">
                    <p>Greetings everyone!</p>
                    <p>
                        Welcome to my website, where you can see my 
                        projects and ideas. Here you will find not only software solutions, 
                        but also my artistic works, presented in the form of sites and 
                        interesting code developments. <span className="toHide">I am an extroverted person and I am 
                        always happy to be around wonderful people. They inspire me to develop, 
                        and I, in turn, strive to bring something new and exciting to our community.</span> 
                    </p>
                    <p>
                        On this site, you will be able to see how I combine technical skills with 
                        creativity, creating unique and innovative solutions.<span className="toHide"> Every project for me is an opportunity 
                        to explore new horizons and improve my skills.</span> I believe that programming and art are two wings that 
                        allow my creativity to soar to new heights. 
                    </p>
                    <div className="center-button">
                        <button className="get-more"><Link to='/about'>Read More</Link></button>
                    </div>
                    
                </div>
                <div className="intro-image">
                    <img src={introPhoto} alt="photo for introduction" />
                </div>
            </div>
        </section>
    )
}
export default Introduction;