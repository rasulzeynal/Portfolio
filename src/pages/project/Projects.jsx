import React from 'react';
import Particle2 from '../Particle2';
import { Container, Row, Col, Card} from 'reactstrap';
import {projectData} from "../../data/pojectData";

const Projects = () => {
  return (
    <Container>
       <Particle2/>
       <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works</strong>
        </h1>
        <p style={{color: "white"}}>
        Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            {projectData.map((project) => {
              <Card>test</Card>
            })}
          </Col>
        </Row>
        </Container> 
    </Container>
    
  )
}

export default Projects