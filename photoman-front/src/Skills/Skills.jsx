import React from "react";
import './Skills.css';
import { skills } from "../data/data";

function Skills(){
    return(
        <section className="skills">
            <h2 className="section-header">Skills</h2>
            <div className="skills-box">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <p>{skill}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;