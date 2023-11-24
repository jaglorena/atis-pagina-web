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
  const filtrar = (texto) => {
    setProfesional(null);
    setProfesionales(
      Profesionales.filter((persona) => persona.especialidad === texto)
    );
  };

  const asignarHorario = (horario) => {
    setHorarios(horario);
  };

  const asignarProfesional = (nombre) => {
    setProfesional(nombre);
  };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div>
        <Navegacion />
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              <h1>AGENDAR CITA</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col lg={4} className="class-color">
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "center" }}>Elige Profesional</h4>
              </Row>
              <Row style={{ textAlign: "center" }}>
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={"down"}
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
              <Row style={{ marginTop: "25px" }}>
                {profesionales.map((profesional, index) => (
                  <Col lg={12} key={index * 2}>
                    <Row key={index}>
                      <Button
                        color="primary"
                        outline
                        onClick={() => asignarProfesional(profesional.nombre)}
                        disabled={
                          profesionalSeleccionado === profesional.nombre
                        }
                      >
                        {profesional.nombre}
                      </Button>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={4}>
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "center" }}>
                  Selecciona el día <br /> de tu cita
                </h4>
              </Row>
              <Row style={{ textAlign: "center" }}>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Row>
            </Col>
            <Col lg={4} className="class-color">
              <Row style={{ marginTop: "20px" }}>
                <h4 style={{ textAlign: "center" }}>Horarios disponibles</h4>
              </Row>
              <Row style={{ marginTop: "25px" }}>
                <Col>
                  <Row>
                    <Button
                      color="primary"
                      id="btn8"
                      outline
                      onClick={() => asignarHorario(8)}
                      disabled={horario === 8}
                    >
                      8:00 AM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(9)}
                      disabled={horario === 9}
                    >
                      9:00 AM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(10)}
                      disabled={horario === 10}
                    >
                      10:00 AM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(11)}
                      disabled={horario === 11}
                    >
                      11:00 AM
                    </Button>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(1)}
                      disabled={horario === 1}
                    >
                      1:00 PM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(2)}
                      disabled={horario === 2}
                    >
                      2:00 PM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(3)}
                      disabled={horario === 3}
                    >
                      3:00 PM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario(4)}
                      disabled={horario === 4}
                    >
                      4:00 PM
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
