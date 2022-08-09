import React from 'react';
import Particle2 from '../Particle2';
import ProjectCard from "./ProjectCard";
import {Container, Row} from 'react-bootstrap';
import {projectData} from "../../data/pojectData";

const Projects = () => {
  return (
    <Container fluid className="project-section">
       <Particle2/>
       <Container >
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works</strong>
        </h1>
        <p className='project-heading-second'>
        Here are a few projects I've worked on recently.
        </p>
        <Row className="rows">
            {projectData.map((project) => (
              <ProjectCard 
              imgPath = {project}
              isBlock = {false}
              key={project.id}
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
            ))}
        </Row>
        </Container> 
    </Container>
  )
}

export default Projects