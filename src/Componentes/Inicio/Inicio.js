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
      <div className="pagina-inicio" style={{ background: "linear-gradient(to right, black, #0f1f0c)", }}>
        {/* Cambia el color de fondo a azul (#0074e4) */}
        <Container>
          <Row>
            <Col xs="12" md="12" className="mx-auto mt-4">
              <h1 style={{color: "white",}}>CuénTanos.org</h1>
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
                  {/* Contenido de tu componente */}
                </h5>
                <Link to="seccion/">
                  <li>
                    <Button
                      className="ButtonInicio mt-5"
                      style={{
                        height: 40,
                        marginTop: 3,
                        marginBottom: 2,
                        background: "linear-gradient(to right, #a6ff8e, #1d7f13)",
                      }}
                    >
                      <h5>Sección de artículos</h5>
                    </Button>
                  </li>
                </Link>
              </div>
            </Col>
            <BotonFlotante />
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
