import React, {useState} from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from '../ControlArrows/ControlArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


function ProjectSlider({ projects }) {
    const [activeSlide, setActiveSlide] = useState(0);
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,  
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setActiveSlide(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
            }
        ]   
    };
  
    return (
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className={`img-slide ${index === activeSlide ? 'active' : ''}`}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </Slider>
    );
  }
  
  export default ProjectSlider;