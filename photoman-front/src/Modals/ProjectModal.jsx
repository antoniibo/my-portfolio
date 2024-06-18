import React from "react";
import './Modal.css';

const ProjectModal = ({ project, closeModal }) => {
    const { title, description, url, github } = project;
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>&times;</span>
                <h2>{title}</h2>
                <div className="modal-container">
                    {description.map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                    ))}
                </div>
                <div className="projects-bottom">
                    <p><b>Live:</b> <a href={url} target="_blank" rel="noopener noreferrer" className="content-link">{url}</a></p>
                    <p><b>GitHub Repo:</b> <a href={github} target="_blank" rel="noopener noreferrer" className="content-link">{github}</a></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;