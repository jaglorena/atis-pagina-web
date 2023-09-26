import React, { Component } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Importa los íconos de fuentes
import Navegacion from '../Navegacion/Navegacion';
import Footer from "../Footer/Footer";
import BotonFlotante from "../BotonFlotante/BotonFlotante";


class Singnup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Agrega la lógica de registro aquí

    // Ejemplo de cómo mostrar un mensaje después de enviar el formulario
    alert('Registro exitoso');
  }

  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '85vh',
      backgroundColor: '#FDFDEE',
    };

    const mainBoxStyle = {
      display: 'flex',
      maxWidth: '800px',
      width: '100%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    };

    const inputStyle = {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '3px',
    };

    const buttonStyle = {
      width: '100%',
      padding: '10px',
      backgroundColor: '#D44325',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      marginTop: '15px',
    };

    const formStyle = {
      flex: '1',
      marginRight: '20px',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const signupOptionsStyle = {
      flex: '1',
      marginLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const logoStyle = {
      fontSize: '48px',
      color: '#3b5998',
      marginBottom: '10px',
    };

    const titleStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '20px',
    };

    return (
      <>
      <Navegacion />
      <div style={containerStyle}>
        <div style={mainBoxStyle}>
          <div style={formStyle}>
            <h2 style={titleStyle}>Regístrate</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmEmail">Confirmar Email:</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={this.state.confirmEmail}
                  onChange={this.handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <button className='ButtonS' type="submit" style={buttonStyle}>Registrarse</button>
            </form>
          </div>
          <div style={signupOptionsStyle}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>
                <span style={logoStyle}>
                  <FaFacebook />
                </span>
                <span>Regístrate con Facebook</span>
              </div>
              <div>
                <span style={logoStyle}>
                  <FaGoogle />
                </span>
                <span>Regístrate con Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BotonFlotante  />
      <Footer />;
      </>
    );
  }
}
<Footer />

export default Singnup;
