import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web2 from "../../Assets/Projects/preview2.png";
import portfolio from "../../Assets/Projects/Preview3.png";
import web1 from "../../Assets/Projects/preview.png";
import sys1 from "../../Assets/Projects/00sys.png";
import sys2 from "../../Assets/Projects/01sys.png";
import sys3 from "../../Assets/Projects/02sys.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MIS <strong className="purple">PROYECTOS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card block glow">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Mi primer Portfolio"
              description="Mi primer portfolio que tuve el agrado de crearlo en el curso de Front-End realizado con Javascript, Html, y CSS"
              demoLink="https://natalia-quenan-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card block glow">
            <ProjectCard
              imgPath={web1}
              isBlog={false}
              title="Website Tattoo Personal"
              description="Mi primer Página web referenciada a mi trabajo como Tatuadora, realizada con HTML, CSS, Bootstrap"
              demoLink="https://www.nataliaquenantattoo.com.ar/"
            />
          </Col>

          <Col md={4} className="project-card block glow">
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
      <Container fluid className="project-section2">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={9}>
            <h1
              style={{
                fontSize: "2.6em",
                color: "white",
                paddingBottom: "20px",
              }}
            >
              Tattoo <span className="purple"> Manager System </span>
            </h1>
            <p style={{ color: "white", textAlign: "center", }}>
              Proyecto Final realizado para el Curso de Full-Stack Web Developer.
              <br />
              El propósito de éste sistema de gestión de locales de tatuajes es
              proporcionar una solución integral para abordar los desafíos que
              enfrentan en su día a día.
              <br />
              Los locales o estudios de tatuajes a menudo se encuentran en un
              entorno artístico, pero pueden enfrentar dificultades en la
              administración y organización de su operación.
              <br /> Este sistema aborda estas necesidades al ofrecer
              herramientas que permiten una gestión eficiente de citas, gestión
              de Tatuadores y Piercers, sean locales o Invitados, control de
              Insumos y Merchandise, así como una administración de usuarios
              simplificada.
              <br /> Entendemos que la eficiencia y la organización son
              fundamentales para el éxito de éste rubro, y es precisamente lo
              que éste sistema busca proporcionar.
            </p>
            <p style={{ color: "white", textAlign: "center"}}>
              Sistema desarrollado con React.js, Bootstrap, MySql, y Node.js.
              <br />
              Este sistema contiene módulos tales como:
              <br />
              <br />
              <li>Login y Registro</li>
              <li>Agenda de Turnos</li>
              <li>Control de Stock</li>
              <li>Gestión de Usuarios</li>
              <li>Formulario de Clientes, Tatuadores y Piercers</li>
              <li>Panel de información y Edición Personal de Usuario</li>
            </p>
            <Row style={{ justifyContent: "center" }}>
              <Col md={4} className="project-card block glow">
                <ProjectCard imgPath={sys3} />
              </Col>
              <Col md={4} className="project-card block glow">
                <ProjectCard imgPath={sys1} />
              </Col>
              <Col md={4} className="project-card block glow">
                <ProjectCard imgPath={sys2} />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Col>
              <img src="https://media.tenor.com/hB9OTbewrikAAAAi/work-work-in-progress.gif" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
