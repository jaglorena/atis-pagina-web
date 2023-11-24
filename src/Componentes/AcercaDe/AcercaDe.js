import React, { useState, useEffect } from 'react';
import './Acerca.css';
import Navegacion from '../Navegacion/Navegacion';
import Footer from '../Footer/Footer';
import BotonFlotante from '../BotonFlotante/BotonFlotante';

import abrazos from './img/abrazos.jpg';
import unidos from './img/unidos.jpg';
import somos from './img/somos.jpg';
import nos from './img/nos.jpg';

import './Acerca.css'; // Importa el archivo de estilos

const images = [abrazos, unidos, somos, nos];

const AcercaDe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]); 

  return (
    <>
      <Navegacion />
      <div className="margin">
        <div className="about-us-container">
          <div className="header">
            <h1>CuénTanos.org</h1>
            <p>¡Descubre nuestra historia!</p>
          </div>

          <div className="content mt-5">
            <div className="mission">
              <h2>Nuestra Misión</h2>
              <p>
              En el año 2023, dimos inicio a nuestra organización con un propósito claro y un compromiso inquebrantable: brindar ayuda a aquellos que sufren en silencio, afectados por la dolorosa realidad de la violencia intrafamiliar. Nuestra misión va más allá de la creación de un simple sitio web; nos esforzamos por construir un refugio digital, un espacio de esperanza y apoyo para quienes enfrentan situaciones difíciles en el entorno aparentemente seguro de sus hogares.
              En un mundo interconectado, reconocemos la importancia de la tecnología y la accesibilidad para llegar a quienes necesitan ayuda. Nuestro sitio web se erige como un faro de esperanza, proporcionando información valiosa, recursos esenciales y, sobre todo, un refugio seguro donde las víctimas puedan encontrar consuelo y orientación.
              </p>
            </div>

            <div className="commitment">
              <h2>Nuestro Compromiso</h2>
              <p>
              Compromiso se extiende a través de cada rincón de nuestro sitio web, donde buscamos establecer un espacio digital acogedor y lleno de recursos. Nos comprometemos a mantener un entorno virtual seguro, donde las personas puedan compartir sus experiencias sin temor al juicio, sabiendo que serán escuchadas con comprensión y respeto.
              La empatía es la base de nuestro enfoque. Reconocemos que cada historia es única y que las personas afectadas por la violencia intrafamiliar merecen ser tratadas con dignidad y compasión. Nuestro compromiso con la empatía se refleja en la forma en que abordamos cada recurso, cada artículo y cada interacción en nuestro sitio web.
              </p>
            </div>

            <div className="image-carousel mt-5 mb-5">
               <h2 className="mt-5 mb-5">Ayuda sin nada a cambio...</h2>
              <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BotonFlotante />
    </>
  );
};

export default AcercaDe;
