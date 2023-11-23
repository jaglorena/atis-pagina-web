import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./AgendarCita.css";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import Profesionales from "../../data/Profesionales";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

const AgendarCita = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profesionales, setProfesionales] = useState([]);
  const [profesionalSeleccionado, setProfesional] = useState(null);
  const [horario, setHorarios] = useState(null);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const filtrar = (texto) =>
    setProfesionales(
      Profesionales.filter((persona) => persona.especialidad === texto)
    );

  const asignarHorario = (horario) => {
    setHorarios(horario);
  };

  const asignarProfesional = (nombre) => {
    setProfesional(nombre);
    console.log(profesionalSeleccionado);
  };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div>
        <Navegacion />
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              <h1>Agenda una cita con nuestros profesionales</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col lg>
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "start" }}>
                  Selecciona el área para tu cita
                </h4>
              </Row>
              <Row>
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={"end"}
                  onChange={() => console.log("Clicked")}
                >
                  <DropdownToggle caret>Seleccione especialidad</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => filtrar("Abogado")}>
                      Abogados
                    </DropdownItem>
                    <DropdownItem onClick={() => filtrar("Psiquiatra")}>
                      Psiquiatras
                    </DropdownItem>
                    <DropdownItem onClick={() => filtrar("Psicologo")}>
                      Psicologos
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "start" }}>
                  Profesionales disponibles! Selecciona!
                </h4>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                {profesionales.map((profesional, index) => (
                  <Row key={index}>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarProfesional(profesional.nombre)}
                      disabled={profesionalSeleccionado === profesional.nombre}
                    >
                      {profesional.nombre}
                    </Button>
                  </Row>
                ))}
              </Row>
            </Col>
            <Col lg>
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "start" }}>
                  Selecciona el día <br /> de tu cita
                </h4>
              </Row>
              <Row>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Row>
            </Col>
            <Col lg>
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "start" }}>Horarios disponibles!</h4>
              </Row>
              <Row style={{ marginTop: "25px" }}>
                <Col>
                  <Row>
                    <h5>AM</h5>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      id="btn8"
                      outline
                      onClick={() => asignarHorario(8)}
                      disabled={horario === 8}
                    >
                      8-9
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(9)}
                      disabled={horario === 9}
                    >
                      9-10
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(10)}
                      disabled={horario === 10}
                    >
                      10-11
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(11)}
                      disabled={horario === 11}
                    >
                      11-12
                    </Button>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <h5>PM</h5>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(1)}
                      disabled={horario === 1}
                    >
                      1-2
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(2)}
                      disabled={horario === 2}
                    >
                      2-3
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(3)}
                      disabled={horario === 3}
                    >
                      3-4
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(4)}
                      disabled={horario === 4}
                    >
                      4-5
                    </Button>
                  </Row>
                  <Row>
                    <BotonFlotante />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "30px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <Col>
              <Button color="success" outline>
                Agendar!
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AgendarCita;
