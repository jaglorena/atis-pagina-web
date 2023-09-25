import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; // Si estás utilizando enrutamiento

const navbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/" className="navbar-brand">Mi Sitio</Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/inicio">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/acerca">Acerca de</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/servicios">Servicios</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contacto">Contacto</NavLink>
        </NavItem>
      </Nav>
      <Button color="primary" className="ml-3">Botón 1</Button>
      <Button color="secondary" className="ml-3">Botón 2</Button>
      <Button color="info" className="ml-3">Botón 3</Button>
    </Navbar>
  );
}

export default navbar;
