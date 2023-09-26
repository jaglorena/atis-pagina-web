import React, { Component } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import BotonFlotante from "../BotonFlotante/BotonFlotante";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Agrega la lógica de autenticación aquí

    // Ejemplo de cómo mostrar un mensaje después de enviar el formulario
    alert('Inicio de sesión exitoso');
  }

  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '85vh',
      backgroundColor: '#FDFDEE',
    };

    const formStyle = {
      display: 'flex',
      flexDirection: 'column', // Para alinear elementos verticalmente
      alignItems: 'center', // Centrar elementos horizontalmente
      maxWidth: '400px',
      width: '100%',
      height: '500px',
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
      width: '105%',
      padding: '10px',
      backgroundColor: '#D44325',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      marginTop: '15px',
    };

    const iconStyle = {
      fontSize: '24px',
      marginRight: '10px',
    };

    const logoContainerStyle = {
      display: 'flex',
      alignItems: 'center', // Centrar elementos horizontalmente
      marginTop: '10px',
    };

    const logoTextStyle = {
      marginLeft: '10px',
    };

    return (
      <>
      <Navegacion />
      <div style={containerStyle}>
        <div style={formStyle}>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
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
            <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
            <div style={logoContainerStyle}>
              <span style={iconStyle}>
                <FaGoogle />
              </span>
              <span style={iconStyle}>
                <FaFacebook />
              </span>
              <div style={logoTextStyle}>
                Iniciar sesión con Google o Facebook
              </div>
            </div>
          </form>
        </div>
      </div>
      <BotonFlotante  />
      <Footer />;
      </>
    );
  }
}

export default Login;
