import React from 'react';
import Card from 'react-bootstrap/Card';


const AboutCard = () => {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
      <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am Rasul Zeynalov from Baku, Azerbaijan.
            <br />
            <br />
            I have been working in the IT field since 2018. For more than a year, I have been studying Front end in the form of self study. During this time I learned and continue to learn HTML, CSS, Bootstrap and other technologies.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard;
