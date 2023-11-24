import React, { useState } from "react";
import { Container, Row, Col, Button, UncontrolledCarousel } from "reactstrap";
import primera from "./imagenes/primera.jpg";
import segunda from "./imagenes/segunda.jpg";
import tercera from "./imagenes/tercera.jpg";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import "./Inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [modalAbierta, setModalAbierta] = useState(false);
  const [botonBloqueado, setBotonBloqueado] = useState(false);
  const [modalRegistroAbierta, setModalRegistroAbierta] = useState(false);

  const abrirModal = () => {
    setModalAbierta(true);
  };

  const cerrarModal = () => {
    setModalAbierta(false);
    setBotonBloqueado(true);
  };

  const abrirModalRegistro = () => {
    setModalRegistroAbierta(true);
  };

  const cerrarModalRegistro = () => {
    setModalRegistroAbierta(false);
  };

  return (
    <>
      <Navegacion />
      <div className="pagina-inicio" style={{ background: "linear-gradient(to right, black, #0f1f0c)", }}>
        {/* Cambia el color de fondo a azul (#0074e4) */}
        <Container>
          <Row>
            <Col xs="12" md="12" className="mx-auto mt-4">
              <h1>CuénTanos.org</h1>
              {/* Botón para abrir la modal */}
          <Row>
            <Col xs="12" md="12">
              <Button
                onClick={abrirModal}
                disabled={botonBloqueado}
                className="ButtonInicio mt-5"
                style={{ height: 50, marginTop: 4, marginBottom: 2,}}
              >
                <h5>Login</h5>
              </Button>

              <Button
    onClick={abrirModalRegistro}
    className="ButtonInicio mt-5"
    style={{ height: 50, marginLeft: 10, marginTop: 4, marginBottom: 2 }}
  >
    <h5>Registro</h5>
  </Button>
            </Col>

            

            
          </Row>

          
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
          </Row>
          
        </Container>
      </div>

      {/* Modal */}
      <div
        className="modal"
        style={{
          display: modalAbierta ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "400%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="modal-contenido"
          style={{
            backgroundColor: "white",
            width: "80%",
            maxWidth: "800px",
            margin: "100px auto",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2>Bienvenido devuelta!</h2>
          <p>Ingresa tus datos para continuar</p>
          {/* Botón para cerrar la modal */}
          {/* IFrame para cargar el contenido del login.html */}
          <iframe
            title="Login"
            src="/login.html" /* Ruta al archivo login.html en la carpeta public */
            width="100%"
            height="100%"
            frameBorder="0"
          />
          <Button onClick={cerrarModal}>Cerrar Modal</Button>
        </div>
      </div>

      {/* Modal de Registro */}
      <div
        className="modal"
        style={{
          display: modalRegistroAbierta ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "400%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="modal-contenido"
          style={{
            backgroundColor: "white",
            width: "80%",
            maxWidth: "800px",
            margin: "100px auto",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2>Registro</h2>
          <p>Completa el registro</p>
          {/* IFrame para cargar el contenido del register.html */}
          <iframe
            title="Registro"
            src="/register.html" /* Ruta al archivo register.html en la carpeta public */
            width="100%"
            height="100%"
            frameBorder="0"
          />
          <Button onClick={cerrarModalRegistro}>Cerrar Modal</Button>
          </div>
      </div>

      <Footer />
    </>
  );
};

export default Inicio;
