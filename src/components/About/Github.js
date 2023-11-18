import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Col, Row } from "react-bootstrap";
import myImg2 from "../../Assets/21.png";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días de <strong className="purple">Coding</strong>
      </h1>
      <GitHubCalendar
        username="Nquenan"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <Col md={5}>
        <img src={myImg2} className="img-fluid" alt="logo2"  />
      </Col>
    </Row>
  );
}

export default Github;
