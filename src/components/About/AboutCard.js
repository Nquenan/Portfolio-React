import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola!, mi nombre es <span className="purple">Natalia Quenan </span>
            soy de <span className="purple"> Misiones, Argentina</span>
            <br /> Actualmente, acabo de finalizar mi formación en Silicon
            Misiones, donde he adquirido habilidades en Desarrollo Web
            Full-Stack. A lo largo de mi trayectoria, he tenido la oportunidad
            de viajar y mejorar mis habilidades de comunicación en inglés. Mi
            experiencia laboral previa me ha permitido desarrollar habilidades
            esenciales como el trabajo enequipo, adaptabilidad a los cambios,
            empatía y comunicación. Soy una profesional comprometida que
            disfruta enfrentar desafíos en equipo para alcanzar objetivos
            establecidos.
            <br />
            <br />
            Aparte de programar disfruto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Juegos Online
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseñar y Dibujar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Invertir en conocimientos produce siempre los mejores beneficios”
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
