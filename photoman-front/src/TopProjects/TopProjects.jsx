import React from 'react';
import { projects } from '../data/data';
import ProjectSlider from '../Sliders/ProjectSlider';
import { Link } from "react-router-dom";
import './TopProjects.css'

const hotProjects = projects.filter(project => project.hot);

function TopProjects() {
return (
    <section className="slider-box">
      <h2 className="slider-header">Top projects</h2>
      <div className="center-slider">
        <ProjectSlider projects={hotProjects}/>
      </div>
      <div className="center-button-prj">
        <button className="get-more"><Link to='/projects'>See More</Link></button>
      </div>
    </section>
  );
}

export default TopProjects;