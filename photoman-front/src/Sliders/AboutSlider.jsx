import React, { useState } from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from '../ControlArrows/ControlArrows';
import TextModal from "../Modals/TextModal";
import { sections } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
    

function AboutSlider() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', paragraphs: [] });

    const openModal = (section) => {
        setModalContent(section);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [activeSlide, setActiveSlide] = React.useState(0);
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
        <section className="slider-box about">
            <h2 className="slider-header">Little bit more aboute me</h2>
            <div className="center-slider">
                <Slider {...settings}>
                    {sections.map((section, index) => (
                        <div key={index} className={`slide ${index === activeSlide ? 'active' : ''}`}>
                            <h3>{section.title}</h3>
                            {index === activeSlide && (
                                <button className="get-more" onClick={() => openModal(section)}>
                                    Read More
                                </button>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
            {isModalOpen && (
                <TextModal title={modalContent.title} paragraphs={modalContent.paragraphs} closeModal={closeModal} />
            )}
        </section>
    );
};


export default AboutSlider;