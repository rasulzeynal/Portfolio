import React,{useState,useEffect} from 'react';
import Particle2 from "../Particle2";
import { Container, Row, Button } from 'reactstrap';
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/pdf/Rasul.pdf";
import cv from "../../assets/cv/rasul.png"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import Footer from "../Footer"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
      }, []);
    
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle2/>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img src={cv} alt="cv"/>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px",marginBottom:"50px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Footer/>
      </Container>
    </div>
  )
}

export default Resume