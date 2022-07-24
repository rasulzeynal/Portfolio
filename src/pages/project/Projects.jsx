import React from 'react';
import Particle2 from '../Particle2';
import ProjectCard from "./ProjectCard";
import {Container, Row, Col} from 'reactstrap';
import {projectData} from "../../data/pojectData";

const Projects = () => {
  return (
    <Container fluid className="project-section">
       <Particle2/>
       <Container>
        <h1 className='project-heading' style={{textAlign:"center"}}>
          My Recent <strong className='purple'>Works</strong>
        </h1>
        <p style={{color: "white",textAlign:"center"}}>
        Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{display:"flex",flexWrap:"wrap"}}>
            {projectData.map((project) => (
              <ProjectCard 
              imgPath = {project}
              isBlock = {false}
              key={project.id}
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
            ))}
          </Col>
        </Row>
        </Container> 
    </Container>
  )
}

export default Projects