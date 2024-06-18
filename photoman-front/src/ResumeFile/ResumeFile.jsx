import React from "react";
import './ResumeFile.css'
import resume from '../assets/Antonii-Bondar-Resume.pdf'

function ResumeFile(){
    return(
        <section className="resume">
            <h2 className="section-header">My Resume</h2>
            <div className="resume-box">
                <iframe src={resume} className="resume-iframe" title="Antonii Bondar's Resume" />
            </div>
            <div className="button-box">
                <a href={resume} download="Antonii-Bondar-Resume.pdf">
                    <button>Download Resume</button>
                </a>
            </div>
        </section>
    )
}
export default ResumeFile