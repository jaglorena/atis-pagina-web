import React, { useState } from "react";
import Navegacion from "../Navegacion/Navegacion";
import Footer from "../Footer/Footer";
import Inicio from "../Inicio/Inicio.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const users = [
    { id: 1, email: "andy.guevara@catolica.edu.sv", password: "12345678" },
    { id: 2, email: "user@example.com", password: "password123" },
    // Puedes añadir más usuarios aquí
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setError("");
      alert("Inicio de sesión exitoso!");
    } else {
      setError("Credenciales incorrectas. Por favor, intenta de nuevo.");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setError("");
    alert("Has cerrado sesión.");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
    backgroundColor: "#FDFDEE",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    width: "100%",
    height: "500px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "3px",
  };

  const buttonStyle = {
    width: "105%",
    padding: "10px",
    backgroundColor: "#D44325",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "15px",
  };

  const cancelButtonStyle = {
    width: "105%",
    padding: "10px",
    backgroundColor: "#D44325",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "15px",
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Inicio />
          <button onClick={handleLogout} style={buttonStyle}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div>
          <Navegacion />
          <div style={containerStyle}>
            <form onSubmit={handleLogin} style={formStyle}>
              <h2>Iniciar Sesión</h2>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div style={inputStyle}>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div style={inputStyle}>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>
                Iniciar Sesión
              </button>
              <a href="/" style={cancelButtonStyle}>
                Cancelar
              </a>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Login;
