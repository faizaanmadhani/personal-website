import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectCard = (project) => {
    console.log(project)

    return (
        <Card>
            <Card.Img variant="top" src={project.project.image} />
            <Card.Body>
            <Card.Title>{project.project.title}</Card.Title>
            <Card.Text>
                {project.project.description}
            </Card.Text>
            </Card.Body>
        </Card>
        
    )
    
}

export default ProjectCard