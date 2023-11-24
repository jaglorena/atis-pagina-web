import React from "react";
import { Container, Row, Col, Button, UncontrolledCarousel } from "reactstrap";
import primera from "./imagenes/primera.jpg";
import segunda from "./imagenes/segunda.jpg";
import tercera from "./imagenes/tercera.jpg";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import "./Inicio.css";
import { Link } from "react-router-dom";
import BotonFlotante from "../BotonFlotante/BotonFlotante";

const Inicio = () => {
  return (
    <>
      <Navegacion />
      <div className="pagina-inicio">
        <Container>
          <Row>
            <Col xs="12" md="12" className="mx-auto mt-4">
              <h1>CuénTanos.org</h1>
              <UncontrolledCarousel
                className="mt-5"
                items={[
                  {
                    key: 1,
                    src: primera,
                  },
                  {
                    key: 2,
                    src: segunda,
                  },
                  {
                    key: 3,
                    src: tercera,
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="12">
              <div className="informacion mt-5">
                <h5>
                  - El éxito no se trata solo de lograr tus metas, sino de cómo te conviertes en el proceso. El camino hacia el éxito es una
                  oportunidad para crecer, aprender y convertirte en la mejor versión de ti mismo. <br/>
                  <br/>
                  - No importa cuán oscuro pueda parecer el camino, siempre hay una salida. La esperanza y la ayuda están disponibles para ti. <br/>
                  <br/>
                  - Nunca subestimes el impacto que tu historia de supervivencia puede tener en otros. Tu valentía puede inspirar a alguien más 
                  a buscar ayuda y cambiar su vida.<br/>
                </h5>
                <Link to="seccion/">
                  <li>
                    <Button
                      className="ButtonInicio mt-5"
                      style={{ height: 50, marginTop: 4, marginBottom: 2 }}
                    >
                      <h5>Sección de artículos</h5>
                    </Button>
                  </li>
                </Link>
              </div>
            </Col>
            <BotonFlotante  />
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
