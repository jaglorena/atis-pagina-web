import React, { useState } from "react";
import { Col, Button } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navegacion.css";

function Navegacion() {
  const [toggle, setToggle] = useState(false);

  function toggleSideBar() {
    setToggle(!toggle);
  }

  document.body.onclick = function (e) {
    if (e.clientX > window.innerWidth * 0.8) {
      setToggle(false);
    }
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" onClick={toggleSideBar}>
          <img
            style={{
              width: 150,
              height: 70,
              marginBottom: 6,
              marginTop: 3,
              backgroundColor: "light blue",
            }}
            alt="..."
            src={require("./imagenes/logoATIS.png")}
            to="/"
          />
        </Link>
      </div>
      <nav className={toggle ? "sidebar" : ""}>
        <ul>
          <Col md={8}>
            <Link to="/" onClick={toggleSideBar}>
              <li>
                <h5 style={{ marginTop: 15 }}>INICIO</h5>
              </li>
            </Link>
            <Link to="/" onClick={toggleSideBar}>
              <li>
                <h5 style={{ marginTop: 15 }}>FORO</h5>
              </li>
            </Link>
            <Link to="/acercade" onClick={toggleSideBar}>
              <li>
                <h5 style={{ marginTop: 15 }}>ACERCA DE</h5>
              </li>
            </Link>
            <Link to="/agendar" onClick={toggleSideBar}>
              <li>
                <h5>CITA</h5>
              </li>
            </Link>
          </Col>
        </ul>
      </nav>
      <Link to="/singup">
        <li>
          <Button
            className="Button"
            style={{
              height: 40,
              marginTop: 3,
              marginBottom: 2,
              background: "linear-gradient(to right, #1d7f13, #a6ff8e)",
            }}
          >
            <h5>Registrate</h5>
          </Button>
        </li>
      </Link>
      <Link to="/login">
        <li>
          <Button
            className="Button"
            style={{ height: 40,
              marginTop: 3,
              marginBottom: 2,
              background: "linear-gradient(to right, #a6ff8e, #1d7f13)", }}
          >
            <h5>Iniciar Sesión</h5>
          </Button>
        </li>
      </Link>
      <Link to="/">
        <li>
          <FaSearch size={25} />
        </li>
      </Link>
    </header>
  );
}

export default Navegacion;
