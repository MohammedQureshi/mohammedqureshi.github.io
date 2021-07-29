import React from 'react'
import ProjectCard from '../../components/project-card/ProjectCard'
import './Projects.scss'

function Projects(){
    return(
        <div className="Projects">
            <div className="Header">
                <h1> Projects </h1>
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects 