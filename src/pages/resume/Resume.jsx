import React,{useState,useEffect} from 'react';
import Particle2 from "../Particle2";
import { Container, Row, Button } from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/cv/Rasul.pdf";
import cv from "../../assets/cv"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
      }, []);
    
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle2/>
        <Row className='download-row' >
          <Button
            variant="secondary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img className='cv' src={cv} alt="cv"/>
        </Row>

        <Row className='download-row' >
          <Button
            variant="secondary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume
