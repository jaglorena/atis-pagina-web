import React, { useState } from "react";
import { Button, Col, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./btnflotante.css";

function BotonFlotante() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container className="float-container">
      <Row>
        <Col className="text-right">
          <Button className="floating-button" onClick={toggle}>
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Teléfonos de Emergencia</ModalHeader>
            <ModalBody className="modal-content">
            <a href="https://www.pnc.gob.sv/">Policia Nacional Civil</a><h4>911</h4>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default BotonFlotante;
