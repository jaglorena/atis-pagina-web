import React, { useState } from "react";
import { DatePicker } from "react-widgets/cjs";
import { Button, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "react-widgets/styles.css";
import "./AgendarCita.css";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import Profesionales from "../../data/Profesionales";

const AgendarCita = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profesionales, setProfesionales] = useState([]);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const filtrar = (texto) => setProfesionales(Profesionales.filter(persona => persona.especialidad === texto));

  const pageStyle = {
    background: "linear-gradient(to right, black, #0f1f0c)", // Establece el fondo en color negro
    color: "white", // Cambia el color del texto a blanco
  };

  return (
    <div style={pageStyle} >
      <Navegacion />
      <Container style={{ marginTop: "50px", paddingBottom: "100px" , color: "white"}}>
        <Row>
          <Col>
            <h1>Agenda una cita con nuestros profesionales</h1>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col lg>
            <Row>
              <h4 style={{ textAlign: "start" }}>Selecciona el área para tu cita</h4>
            </Row>
            <Row>
              <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"end"} onChange={() => console.log("Clicked")} >
                <DropdownToggle caret>Seleccione especialidad</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => filtrar("Abogado")}>Abogados</DropdownItem>
                  <DropdownItem onClick={() => filtrar("Psiquiatra")}>Psiquiatras</DropdownItem>
                  <DropdownItem onClick={() => filtrar("Psicologo")}>Psicologos</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Row>
            <Row>
              <h4 style={{ textAlign: "start" }}>Selecciona el día <br /> de tu cita</h4>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <DatePicker placeholder="d/mm/yyyy"
                valueEditFormat={{ dateStyle: "long" }}
                valueDisplayFormat={{ dateStyle: "long" }}
              />
            </Row>
          </Col>
          <Col md>
            <Row>
              <h4 style={{ textAlign: "start" }}>Profesionales disponibles! Selecciona!</h4>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              {profesionales.map((profesional, index) => (
                <Row key={index}>
                  <Button color="primary" outline>{profesional.nombre}</Button>
                </Row>
              ))}
            </Row>
          </Col>
          <Col md>
            <Row>
              <h4 style={{ textAlign: "start" }}>Horarios disponibles!</h4>
            </Row>
            <Row style={{ marginTop: "25px" }}>
              <Col>
                <Row>
                  <h5>AM</h5>
                </Row>
                <Row>
                  <Button color="primary" outline>8-9</Button>
                </Row>
                <Row>
                  <Button color="primary" outline>9-10</Button>
                </Row>
                <Row>
                  <Button color="primary" outline>10-11</Button>
                </Row>
                <Row>
                  <Button color="primary" outline>11-12</Button>
                </Row>
              </Col>
              <Col>
                <Row>
                  <h5>PM</h5>
                </Row>
                <Row>
                  <Button color="primary" outline>1-2</Button>
                </Row>
                <Row>
                  <Button color="primary" outline>2-3</Button>
                </Row>
                <Row>
                  <Button color="primary" outline>3-4</Button>
                </Row>
                <Row>
                  <Button color="primary" outline>4-5</Button>
                </Row>
                <Row>
                  <BotonFlotante />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px", textAlign: "center", marginBottom: "30px" }}>
          <Col>
            <Button className="button" color="success" outline>Agendar!</Button>
            

          </Col>
        </Row>
      </Container>
      <div style={{marginTop: "150px"}}><Footer style={{ position: "fixed", bottom: "0", width: "100%",  }} /></div>
      
    </div>
  );
};

export default AgendarCita;
