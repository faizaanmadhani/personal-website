import React, {Suspense} from 'react'
import ProjectsData from './projectsData'
import "./projects.css"
import ProjectCard from './projectcard'
import StackGrid from 'react-stack-grid'



const Projects = () => {

    const renderProjects = () => {
        const projectsNames = ['Project1', 'Project2', 'Project3', 'Project4']
        var projectArray = []
        for (var i = 0; i < projectsNames.length; i++) {
            const project = ProjectsData[projectsNames[i]]
            console.log(project)
            projectArray.push(
                <ProjectCard
                    project={project}
                />
            )
        }
        return projectArray
    }

    return (
        <div className="container-projects">
        <StackGrid columnWidth={350} gutterHeight={30}>
            {renderProjects()}
        </StackGrid>
        </div>
    )
} 

export default Projects