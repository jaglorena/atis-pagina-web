import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Inicio from './Componentes/Inicio/Inicio';
import AcercaDe from './Componentes/AcercaDe/AcercaDe';
import Singup from './Componentes/Singup/Singup';
import Login from './Componentes/Login/Login';
import Articulos from './Componentes/Articulos/Articulos'
import BotonFlotante from './Componentes/BotonFlotante/BotonFlotante';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/acercade",
    element: <AcercaDe />
  },
  {
    path: "/singup",
    element: <Singup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/seccion",
    element: <Articulos />
  },
  {
    path: "/btnFlotante",
    element: <BotonFlotante />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
