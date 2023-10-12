import React from 'react';
import "./Acerca.css";
import mision from "./img/mision.png";
import compromiso from "./img/compromiso.png";
import servicios from "./img/servicios.png";
import Navegacion from "../Navegacion/Navegacion"
import Footer from '../Footer/Footer';
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import { Col, Container, Row, UncontrolledCarousel } from 'reactstrap';

function AcercaDe() {
  return (
    <>
        <Navegacion />
        <Container >
          <Row>
            <Col xs="12" md="12" className="mx-auto mt-4">
              <h1>CuénTanos.org</h1>
              <UncontrolledCarousel
                className="mt-5 mb-5"
                items={[
                  {
                    key: 1,
                    src: mision,
                  },
                  {
                    key: 2,
                    src: compromiso,
                  },
                  {
                    key: 3,
                    src: servicios,
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      <BotonFlotante  />
    <Footer />
    </>
  );
}

export default AcercaDe;
