import React from "react";
import Card from "react-bootstrap/Card";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Front End Developer with 2 years experience building and maintaining
            responsive websites. Proficient in HTML, CSS, JavaScript: plus
            modern libraries and frameworks.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
