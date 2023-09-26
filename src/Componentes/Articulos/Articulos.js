import React from "react";
import imagen1 from "./imagenes/abandono.png";
import imagen2 from "./imagenes/fisico.png";
import imagen3 from "./imagenes/psicologico.png";
import imagen4 from "./imagenes/sexual.png";
import imagen5 from "./imagenes/violencia.jpg";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import BotonFlotante from "../BotonFlotante/BotonFlotante";

const Articulos = () => {
  const contenedorStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FDFDEE",
    fontFamily: "Lora, serif",
  };

  const tituloStyles = {
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "Lora, serif",
  };

  const columnasContainerStyles = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#FDFDEE",
  };

  const columnaStyles = {
    flex: 1,
    padding: "20px",
    margin: "0 10px",
    textAlign: "center",
    fontSize: "20px",
  };

  const seccionContenidoStyles = {
    margin: "10px 0",
  };

  const imagenStyles = {
    width: "80%",
    marginBottom: "10px",
  };

  return (
    <>
      <Navegacion />
      <div style={contenedorStyles}>
        <div style={tituloStyles}>¿Qué es la violencia intrafamiliar?</div>
        <div style={columnasContainerStyles}>
          <div style={columnaStyles}>
            <img src={imagen5} alt="Descripción de la imagen 1" />
          </div>
          <div style={columnaStyles}>
            <p>
              La violencia intrafamiliar es un problema social que afecta a
              muchas familias en todo el mundo. Se refiere a cualquier tipo de
              violencia o abuso que ocurre entre los miembros de una familia.
            </p>
            <p>
              Puede manifestarse en diferentes formas, como abuso físico,
              emocional, sexual, verbal o económico. Es importante buscar ayuda
              y apoyo si estás enfrentando esta situación o si conoces a alguien
              que lo esté experimentando.
            </p>
            <p>
              Si estás en peligro inmediato, no dudes en contactar a las
              autoridades locales o a una línea de ayuda contra la violencia
              doméstica.
            </p>
          </div>
        </div>
        <div style={tituloStyles}>Tipos de violencia</div>
        <div style={columnasContainerStyles}>
          <div style={columnaStyles}>
            <div style={seccionContenidoStyles}>
              <h2>ABANDONO</h2>
              <img src={imagen1} alt="Descripción de la imagen 1" />
              <p>
                Desamparar de manera injustificada a uno o varios miembros de la
                familia pueden poner en peligro la salud de los miembros de la
                familia.
              </p>
            </div>
          </div>
          <div style={columnaStyles}>
            <div style={seccionContenidoStyles}>
              <h2>MALTRATO FÍSICO</h2>
              <img src={imagen2} alt="Descripción de la imagen 1" />
              <p>
                Incluye acciones como golpear, empujar, sacudir, abofetear,
                patear, pellizcar, asfixiar, estrangular y quemar.
              </p>
            </div>
          </div>
          <div style={columnaStyles}>
            <div style={seccionContenidoStyles}>
              <h2>MALTRATO PSICOLÓGICO</h2>
              <img src={imagen3} alt="Descripción de la imagen 1" />
              <p>
                Una acción u omisión que causa alteraciones o trastornos
                psiquiátricos
              </p>
            </div>
          </div>
          <div style={columnaStyles}>
            <div style={seccionContenidoStyles}>
              <h2>MALTRATO SEXUAL</h2>
              <img src={imagen4} alt="Descripción de la imagen 1" />
              <p>
                En otras palabras, imponer o inducir a prácticas sexuales no
                deseadas o que no tiene la capacidad para consentir
              </p>
            </div>
          </div>
        </div>
        <BotonFlotante  />
      </div>
      <Footer />;
    </>
  );
};


export default Articulos;
