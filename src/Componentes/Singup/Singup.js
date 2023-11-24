import React, { Component } from "react";
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastName: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, confirmEmail, password, confirmPassword } = this.state;

    if (email !== confirmEmail || password !== confirmPassword) {
      alert("Las confirmaciones de correo o contraseña no coinciden");
    } else {
      alert("Registro exitoso");
      this.setState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
        name: "",
        lastName: "",
      });
      window.location.href = "/"; // Redirige a la página de inicio
    }
  };

  handleCancel = () => {
    // Lógica para cancelar el registro y redirigir a la página de inicio
    this.setState({
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastName: "",
    });
    window.location.href = "/"; // Reemplaza '/' con la ruta de tu página de inicio
  };

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#FDFDEE",
    };

    const mainBoxStyle = {
      display: "flex",
      maxWidth: "800px",
      width: "100%",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      margin: "20px",
    };

    const inputStyle = {
      width: "100%",
      padding: "10px",
      margin: "5px 0",
      border: "1px solid #ccc",
      borderRadius: "3px",
    };

    const buttonStyle = {
      width: "100%",
      padding: "10px",
      backgroundColor: "#D44325",
      color: "#fff",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      marginTop: "15px",
    };

    const cancelButtonStyle = {
      width: "100%",
      padding: "10px",
      backgroundColor: "#D44325",
      color: "#fff",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      marginTop: "15px",
    };

    const formStyle = {
      flex: "1",
      marginRight: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <>
        <Navegacion />
        <div style={containerStyle}>
          <div style={mainBoxStyle}>
            <div style={formStyle}>
              <h2>Regístrate</h2>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label>Contraseña:</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label>Apellido:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label>Confirmar Email:</label>
                  <input
                    type="email"
                    name="confirmEmail"
                    value={this.state.confirmEmail}
                    onChange={this.handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label>Confirmar Contraseña:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    style={inputStyle}
                    required
                  />
                </div>
                <div style={{ marginTop: "15px" }}>
                  <button type="submit" style={buttonStyle}>
                    Registrarse
                  </button>
                  <button
                    type="button"
                    onClick={this.handleCancel}
                    style={cancelButtonStyle}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <BotonFlotante />
        <Footer />
      </>
    );
  }
}

export default Signup;
