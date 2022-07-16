import { Row,Col, Container } from "reactstrap"
import Particle2 from "../Particle2"
import AboutCard from "./AboutCard";
import laptopImg from "../../assets/img/about.png";
import Techstack from "./Techstack";
import Github from "./Github"



const About = () => {
  return (
    <Container fluid className="about-section">
        <Particle2/>
        <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}> 
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >

            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",textAlign:"center"}}>
              Know Who I'm
            </h1>
            <AboutCard />
            </Col>
            <Col 
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
             <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" style={{textAlign:"center"}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack/>
        <Github/>
        </Container>
    </Container>
  )
}

export default About