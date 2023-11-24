import React, { useState } from "react";
import { Col, Button } from "reactstrap";
import { FaSearch  } from "react-icons/fa";
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
            style={{ width: 150, height: 90, marginBottom: 6, marginTop: 3 }}
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
            <Link to="/foro" onClick={toggleSideBar}>
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
      
      <Link to="/">
        <li>
        <FaSearch  size={25} />
        </li>
      </Link>
    </header>
  );
}

export default Navegacion;
