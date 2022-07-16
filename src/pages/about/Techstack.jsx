import React from 'react';
import { Row,Col } from 'reactstrap';
import {
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiJqueryLogo,
  DiSass,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import {AiOutlineHtml5} from "react-icons/ai";
import {BsBootstrap} from "react-icons/bs";


const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiSass/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  )
}

export default Techstack