import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* // isActive */}
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/about"
          >
            Acerca de
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
