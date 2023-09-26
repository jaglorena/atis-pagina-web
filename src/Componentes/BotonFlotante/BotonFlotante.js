import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./btnflotante.css";

function BotonFlotante() {
  return (
    <Container className="float-container">
      <Row>
        <Col>
          <Button className="floating-button" style={{ height: 50, marginTop: 90, marginBottom: 20 }}>
            <h6>Teléfonos de emergencia</h6>
          </Button>
        </Col>
      </Row>
    </Container>
    
  );
}

export default BotonFlotante;
