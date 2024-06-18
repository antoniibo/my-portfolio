import React,{useState} from "react";
import './IntroItem.css'
import PrevItem from "../PrevItem/PrevItem";
import { certifications } from "../data/data";
import CertModal from "../Modals/CertModal";

function Certification(){
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentCert, setCurrentCert] = useState(null);

    const openModal = (certification) => {
        setCurrentCert(certification);
        setModalOpen(true);
    };
    const closeModal = () => {
        setCurrentCert(null);
        setModalOpen(false);
    };
    return(
        <section className="certifications">
            <h2 className="slider-header">Certifications</h2>
            <div className="present-labels">
                {certifications.map(cert => (
                    <PrevItem key={cert.id} item={cert} openModal={() => openModal(cert)}/>
                ))}
                {isModalOpen && currentCert && <CertModal certification={currentCert} closeModal={closeModal} />}
            </div>
        </section>
    )
}

export default Certification
