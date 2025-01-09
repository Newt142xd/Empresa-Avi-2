import React from "react";
import "./Menu.css";
import logo from "../assets/St rboy.png"; // Importa el logo desde su ruta

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
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Tienda</a>
        </li>
        <li>
          <a href="/">Contacto</a>
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
