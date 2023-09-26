import React from 'react';
import "./Acerca.css";
import Navegacion from "../Navegacion/Navegacion"
import Footer from '../Footer/Footer';
import BotonFlotante from "../BotonFlotante/BotonFlotante";

function AcercaDe() {
  return (
    <>
        <Navegacion />
        <div className='cuerpo'>
      <div className="header">
        <h1 className="header-title">ACERCA DE NOSOTROS</h1>
      </div>
      <div className="main">
        <section className="about-content">
          <h2 className="about-title">Nuestra Misión</h2>
          <p>
            En {new Date().getFullYear()}, fundamos nuestra organización con el firme compromiso de ayudar a las personas que sufren de violencia intrafamiliar. Nuestra misión es proporcionar apoyo, recursos y un refugio seguro para aquellos que enfrentan situaciones difíciles en sus hogares.
          </p>
        </section>
        <section className="about-content">
          <h2 className="about-title">Nuestro Compromiso</h2>
          <p>
            En cada paso que damos, nos guían los valores de empatía, solidaridad y justicia. Trabajamos incansablemente para concienciar sobre la violencia intrafamiliar y ofrecer ayuda a las víctimas, brindándoles la esperanza y el apoyo necesarios para reconstruir sus vidas.
          </p>
        </section>
        <section className="about-content">
          <h2 className="about-title">Nuestros Servicios</h2>
          <p>
            Ofrecemos una variedad de servicios, que incluyen asesoramiento, albergue temporal, asistencia legal y programas de empoderamiento. Nuestro equipo dedicado está aquí para escuchar, apoyar y guiar a quienes buscan salir de situaciones abusivas.
          </p>
        </section>
      </div>
      <BotonFlotante  />
    </div>
    <Footer />
    </>
  );
}

export default AcercaDe;
