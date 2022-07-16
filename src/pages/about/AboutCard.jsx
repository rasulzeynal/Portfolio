import React from 'react';
import {Card,CardBody} from 'reactstrap';
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view" style={{backgroundColor:"transparent",padding:"0"}}>
      <CardBody>
      <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am Rasul Zeynalov from Baku, Azerbaijan.
            <br />
            <br />
            I have been working in the IT field since 2018. For more than a year, I have been studying Front end in the form of self study. During this time I learned and continue to learn HTML, CSS, Bootstrap and other technologies.
          </p>
        </blockquote>
      </CardBody>
    </Card>
  )
}

export default AboutCard




/* <div style={{color:"white",justifyContent:"center",maxWidth:"600px"}}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Rasul Zeynalov from Baku, Azerbaijan.
            <br />
            <br />
             I have been working in the IT field since 2018. For more than a year, I have been studying Front end in the form of self study. During this time I learned and continue to learn HTML, CSS, Bootstrap and other technologies.
          </p>
        </blockquote> 
    </div> */