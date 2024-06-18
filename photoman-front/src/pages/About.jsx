import React from "react";
import HeroAbout from "../Hero/HeroAbout";
import AboutSlider from "../Sliders/AboutSlider";
import Skills from "../Skills/Skills";
import Certification from "../IntroItem/Certifications";

function About(){
    return(
        <>
            <HeroAbout/>
            <AboutSlider/>
            <Skills/>
            <Certification/>
        </>
    )
}
export default About