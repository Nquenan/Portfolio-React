import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Actualmente, he finalizado mi formación en Silicon Misiones, donde he adquirido conocimiento y experiencia en Desarrollo Web Full-Stack.
            <br />A lo largo de mi trayectoria, he tenido la oportunidad de viajar y mejorar mis habilidades de comunicación en inglés.
            <br />
            Mi experiencia laboral previa me ha permitido desarrollar competencias esenciales como el trabajo en equipo, adaptabilidad a los cambios, empatía y comunicación.
            <br />
            Soy una profesional comprometida que disfruta enfrentar desafíos en equipo para alcanzar objetivos establecidos.
            <br />
            <br />
            Aparte de programar, disfruto de:
          </p>

          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Diseño Gráfico e Ilustración Digital
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Crypto DYOR
            </li>
            <li className="about-activity">
              <ImPointRight /> Juegos Online
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
