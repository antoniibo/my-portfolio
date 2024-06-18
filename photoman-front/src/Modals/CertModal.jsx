import React from "react";
import './Modal.css'

const CertModal = ({certification, closeModal}) =>{
    const { title, dateS, dateF, image } = certification;
    return(
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>&times;</span>
                <h2>{title}</h2>
                <div className="content-center">
                    <div className="modal-cert-container">
                        <img  src={image} alt={title+'.photo'}/>
                    </div>
                    <div className="date-place">
                        <p><b>Start date:</b> {dateS}</p>
                        <p><b>Finish date:</b> {dateF}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertModal;