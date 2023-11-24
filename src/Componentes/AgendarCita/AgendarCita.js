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
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./AgendarCita.css";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import Profesionales from "../../data/Profesionales";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import imagen1 from "./img/1card.png";
import imagen2 from "./img/violencia.jpg";
import imagen3 from "./img/maltrato.jpg";

const AgendarCita = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profesionales, setProfesionales] = useState([]);
  const [fechaCita, asginarFecha] = useState(new Date());
  const [profesionalSeleccionado, setProfesional] = useState(null);
  const [horarioSeleccionado, setHorario] = useState(null);
  const [horarios, setHorarios] = useState([]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const filtrar = (texto) => {
    setProfesional(null);
    setHorario(null);
    setHorarios([]);
    setProfesionales(
      Profesionales.filter((persona) => persona.especialidad === texto)
    );
  };

  const asignarHorario = (horario) => {
    setHorario(horario);
    setHorarios([horario]);
  };

  const asignarProfesional = (nombre) => {
    setProfesional(nombre);
  };

  const cambioDeFecha = (date) => {
    if (date.toLocaleDateString() === "5/12/2023") {
      setHorarios("10:00 AM");
    }
    asginarFecha(date);
  };

  const handleClickAgendar = () => {
    if (profesionalSeleccionado === null) {
      alert("Por favor seleccione un profesional para ser asesorado");
      return;
    } else if (!!!horarioSeleccionado) {
      alert("Por favor seleccione una hora para ser asesorado");
      return;
    }

    if (
      horarioSeleccionado === "10:00 AM" &&
      profesionalSeleccionado === "Abgda. Maria Lugano" &&
      fechaCita.toLocaleDateString() === "5/12/2023"
    ) {
      alert("Este horario ya se encuentra reservado");
      return;
    }
    let mensaje = `Se va a agendar la cita el dia ${fechaCita.toLocaleDateString()} iniciando a las ${horarioSeleccionado} con el profesional: ${profesionalSeleccionado}`;
    if (window.confirm(mensaje) === true) alert("Cita agendada");
  };

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
                  selected={fechaCita}
                  onChange={(date) => cambioDeFecha(date)}
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
                      onClick={() => asignarHorario("8:00 AM")}
                      disabled={horarios.includes("8:00 AM")}
                    >
                      8:00 AM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario("9:00 AM")}
                      disabled={horarios.includes("9:00 AM")}
                    >
                      9:00 AM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario("10:00 AM")}
                      disabled={horarios.includes("10:00 AM")}
                    >
                      10:00 AM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario("11:00 AM")}
                      disabled={horarios.includes("11:00 AM")}
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
                      onClick={() => asignarHorario("1:00 PM")}
                      disabled={horarios.includes("1:00 PM")}
                    >
                      1:00 PM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario("2:00 PM")}
                      disabled={horarios.includes("2:00 PM")}
                    >
                      2:00 PM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario("3:00 PM")}
                      disabled={horarios.includes("3:00 PM")}
                    >
                      3:00 PM
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      outline
                      onClick={() => asignarHorario("4:00 PM")}
                      disabled={horarios.includes("4:00 PM")}
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
              <Button
                color="success"
                outline
                onClick={() => handleClickAgendar()}
              >
                Agendar
              </Button>
            </Col>
          </Row>

          <row className="mb-5">
            <CardGroup className="mb-5 mt-5">
              <Card>
                <CardImg alt="Card image cap" src={imagen1} top width="100%" />
              </Card>
              <Card>
                <CardImg alt="Card image cap" src={imagen2} top width="100%" />
              </Card>
              <Card>
                <CardImg alt="Card image cap" src={imagen3} top width="100%" />
              </Card>
            </CardGroup>
          </row>
        </Container>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AgendarCita;
