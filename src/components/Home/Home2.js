import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/2.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Mi nombre es Natalia Quenan, soy estudiante de Programación Web
              Full Stack. Diseñadora Gráfica con más de siete años de
              experiencia y una trayectoria de trece años como profesional
              independiente en el mundo del tatuaje. En 2021, decidí expandir
              mis habilidades y me inicié en la programación de forma
              autodidacta. Completé con éxito el curso de Front-End Developer en
              Alura Latam en 2022. Siempre me gustó la programación y el
              diseño. Aprendí de manera autodidacta HTML y CSS en 2005, de allí
              en más, nunca dejé de estar al pendiente de las nuevas
              herramientas.
              <br />
              <br />Soy una estudiante comprometida y entusiasta, siempre ansiosa por absorber conocimiento y explorar nuevas áreas de aprendizaje 😊
              <i>
                <b className="purple"> La cúspide del arte y la tecnología siempre me ha fascinado. </b>
              </i>
              <br />
              <br />
              Siempre que sea posible, también aplico mi pasión por desarrollar proyectos con&nbsp;
              <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                 Librerías Javascript y Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js</b>&nbsp;y 
                <b className="purple"> Bootstrap</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>PUEDES CONTACTARME</h1>
            <p>
              siéntete libre <span className="purple"> de conectar </span>
              conmigo através de:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nquenan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/natalia-quenan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/blacky_codes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
