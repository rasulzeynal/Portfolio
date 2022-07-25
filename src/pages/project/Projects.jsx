import React from 'react';
import Particle2 from '../Particle2';
import ProjectCard from "./ProjectCard";
import {Container, Row, Col} from 'reactstrap';
import {projectData} from "../../data/pojectData";

const Projects = () => {
  return (
    <Container fluid className="project-section" style={{backgroundColor:"#150b27",position:"absolute"}}>
       <Particle2/>
       <Container >
        <h1 className='project-heading' style={{textAlign:"center",marginTop:"100px"}}>
          My Recent <strong className='purple'>Works</strong>
        </h1>
        <p style={{textAlign:"center",color:"white"}}>
        Here are a few projects I've worked on recently.
        </p>
        <Row style={{paddingBottom: "10px" }} className="rows">
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