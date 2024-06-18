import React from "react";
import './Modal.css';

const TextModal = ({ title, paragraphs, closeModal }) => {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>&times;</span>
                <h2>{title}</h2>
                <div className="modal-text-container">
                    {paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextModal;