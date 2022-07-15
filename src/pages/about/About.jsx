import { Row,Col } from "reactstrap"
import Particle2 from "../Particle2"
import AboutCard from "./AboutCard"
const About = () => {
  return (
    <div className="about">
        <Particle2/>
        <Row style={{ padding: "10px",width:"100vw"}}>
            <Col md={7}
            style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",textAlign:"center",color:"white"}}>
              Know Who I'm
            </h1>
            <AboutCard/>
            </Col>
        </Row>
    </div>
  )
}

export default About