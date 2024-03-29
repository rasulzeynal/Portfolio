import React from 'react';
import GitHubCalendar from "react-github-calendar";
import Row from 'react-bootstrap/Row';

const Github = () => {
  return (
    <Row className='github'>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="rasulzeynal"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  )
}

export default Github