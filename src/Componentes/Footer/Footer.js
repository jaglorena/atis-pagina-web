import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css"; // Añade un archivo CSS para estilizar el footer

function Footer() {
  return (
    <footer className="footer">
      <Container className="centered-container">
        <Row>
          <Col md="4">
            <div className="contact-info">
              <h4>Contacto</h4>
              <p>Correo: contactanos@ayuda.org</p>
              <p>Teléfono: (123) 456-7890</p>
            </div>
          </Col>
          <Col md="4">
            <div className="navigation-links">
              <h4>Enlaces</h4>
              <ul>
                <li>
                  <a href="/">INICIO</a>
                </li>
                <li>
                  <a href="/">FORO</a>
                </li>
                <li>
                  <a href="/acercade">ACERCA DE</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="4">
            <div className="copyright">
              <p>&copy; 2023 CuénTanos. Todos los derechos reservados.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
