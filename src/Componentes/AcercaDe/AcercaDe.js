import React from 'react';
import "./Acerca.css";
import mision from "./img/mision.png";
import compromiso from "./img/compromiso.png";
import servicios from "./img/servicios.png";
import Navegacion from "../Navegacion/Navegacion"
import Footer from '../Footer/Footer';
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import { Col, Container, Row, UncontrolledCarousel } from 'reactstrap';

// AboutUs.js

import './Acerca.css'; // Importa el archivo de estilos

const AcercaDe = () => {
  return (
    <>
      <Navegacion />
      <div className="margin">
        <div className="about-us-container">
          <div className="header">
            <h1>CuénTanos.org</h1>
            <p>¡Descubre nuestra historia!</p>
          </div>

          <div className="content">
            <div className="mission">
              <h2>Nuestra Misión</h2>
              <p>En 2023, fundamos nuestra organización con el firme compromiso de ayudar a las personas que sufren de violencia intrafamiliar. 
                Nuestra misión es proporcionar apoyo, recursos y un refugio seguro para aquellos que enfrentan situaciones difíciles en sus hogares.</p>
            </div>

            <div className="commitment">
              <h2>Nuestro Compromiso</h2>
              <p>En cada paso que damos, nos guían los valores de empatía, solidaridad y justicia. Trabajamos incansablemente para concienciar sobre la violencia 
                intrafamiliar y ofrecer ayuda a las víctimas, 
                brindándoles la esperanza y el apoyo necesarios para reconstruir sus vidas.</p>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcercaDe;
