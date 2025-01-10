import React from "react";
import "./Menu.css";
import logo from "../assets/St rboy.png"; // Importa el logo desde su ruta
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <ul className="menu-items">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/tienda">Tienda</NavLink>
        </li>
        <li>
          <NavLink to="/">Contacto</NavLink>
        </li>
      </ul>
      <a href="/" className="Button1">
        Registrarse
      </a>
      <a href="/" className="Button2">
        Iniciar Sesion
      </a>
    </nav>
  );
};

export default Menu;
