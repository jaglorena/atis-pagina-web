import React from "react"
import { DatePicker } from "react-widgets/cjs"
import { Button, Container, Row, Col } from "reactstrap"
import "react-widgets/styles.css"
import "./AgendarCita.css"
import Navegacion from "../Navegacion/Navegacion"
import Footer from "../Footer/Footer"
import BotonFlotante from "../BotonFlotante/BotonFlotante"


const AgendarCita = () => {
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
                                <Row>
                                    <Button color="primary" outline >Dra. Ivonne Durán</Button>
                                </Row>
                                <Row>
                                    <Button color="primary" outline >Dra. Lorena Medina</Button>
                                </Row>
                                <Row>
                                    <Button color="primary" outline >Dr. Andy Williams</Button>
                                </Row>
                                <Row>
                                    <Button color="primary" outline >Dr. Jose Luis</Button>
                                </Row>
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
                            <Button color="success" outline>Agendar!</Button>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default AgendarCita