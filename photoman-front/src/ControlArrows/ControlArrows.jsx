import React from "react";
import './ControlArrows.css';

const PrevArrow = ({ onClick }) => {
    return (
        <button className="prev-button" onClick={onClick}>❮</button>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <button className="next-button" onClick={onClick}>❯</button>
    );
};

export { PrevArrow, NextArrow };