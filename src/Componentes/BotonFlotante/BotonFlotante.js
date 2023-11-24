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
            <a href="https://www.pnc.gob.sv/">Policia Nacional Civil</a><h4><FontAwesomeIcon icon={faPhone} className="phone-icono" /> 911</h4>
            <a href="https://isdemu.gob.sv/">Instituto Salvadoreño para el Desarrollo de la Mujer-ISDEMU</a><h4><FontAwesomeIcon icon={faPhone} className="phone-icono"/> 2522-6000</h4>
            <a href="https://goo.su/AJbzE">Fiscalía General de la República - Unidad de Atención Especializada para las Mujeres</a><h4><FontAwesomeIcon icon={faPhone} className="phone-icono"/> 2529-9200</h4>
            <a href="https://injuve.gob.sv/">Instituto Nacional de la Juventud - INJUVE</a><h4><FontAwesomeIcon icon={faPhone} className="phone-icono" /> 2523-7171</h4>
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
