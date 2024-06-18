import React, {useState}  from "react";
import './IntroItem.css'
import ProjectModal from '../Modals/ProjectModal'
import PrevItem from "../PrevItem/PrevItem";
import { projects } from "../data/data";

function ProjectsIntro() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const openModal = (project) => {
        setCurrentProject(project);
        setModalOpen(true);
    };
    const closeModal = () => {
        setCurrentProject(null);
        setModalOpen(false);
    };
    return (
        <section className="projects">
            <div className="present-labels">
                {projects.map(project => (
                    <PrevItem key={project.id} item={project} openModal={() => openModal(project)}/>
                ))}
            </div>
            {isModalOpen && currentProject && <ProjectModal project={currentProject} closeModal={closeModal} />}
        </section>
    );
}

export default ProjectsIntro;