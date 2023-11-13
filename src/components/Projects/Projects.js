import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web2 from "../../Assets/Projects/preview2.png";
import portfolio from "../../Assets/Projects/Preview3.png";
import web1 from "../../Assets/Projects/preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Mi primer Portfolio"
              description="Mi primer portfolio que tuve el agrado de crearlo en el curso de Front-End realizado con Javascript, Html, y CSS"
              demoLink="https://natalia-quenan-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web1}
              isBlog={false}
              title="Website Tattoo Personal"
              description="Mi primer Página web referenciada a mi trabajo como Tatuadora, realizada con HTML, CSS, Bootstrap"
              demoLink="https://www.nataliaquenantattoo.com.ar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web2}
              isBlog={false}
              title="Tattoo Website"
              description="Página web desarrollada para el tatuador Héctor Roa, realizada con HTML,CSS y Javascript"
              demoLink="https://roa-art.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
