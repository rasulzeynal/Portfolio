import { Row,Col, Container } from "react-bootstrap";
import Particle2 from "../Particle2"
import AboutCard from "./AboutCard";
import laptopImg from "../../assets/img/about.png";
import Techstack from "./Techstack";
/* import Github from "./Github" */



const About = () => {
  return (
    <Container fluid className="about-section">
        <Particle2/>
        <Container>
        <Row className="about-row"> 
        <Col
            md={7}
          >

            <h1 className="about-h">
              Know Who I'm
            </h1>
            <AboutCard />
            </Col>
            <Col 
            md={5}
            className="about-img"
          >
             <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" style={{textAlign:"center"}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack/>
        {/* <Github/> */}
        </Container>
    </Container>
  )
}

export default About