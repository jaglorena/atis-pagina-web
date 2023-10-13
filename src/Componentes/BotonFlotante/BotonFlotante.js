import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./btnflotante.css";

function BotonFlotante() {
  return (
    <Container className="float-container">
      <Row>
        <Col>
          <Button className="floating-button" style={{ height: 40,
              marginTop: 3,
              marginBottom: 2,
              background: "linear-gradient(to right, #a6ff8e, #1d7f13)", }}>
            <h6>Teléfonos de emergencia</h6>
          </Button>
        </Col>
      </Row>
    </Container>
    
  );
}

export default BotonFlotante;
