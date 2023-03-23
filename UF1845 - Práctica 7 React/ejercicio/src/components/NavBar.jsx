import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className='barra'>
<ul>
  <li>
<NavLink to={'/'}>
  Inicio
</NavLink>
  </li>
  <li>
    <NavLink to={'/contacto'}>
      Contacto
    </NavLink>
  </li>
  <li>
    <NavLink to={'/formulario'}>
      Formulario
    </NavLink>
  </li>
</ul>


    </div>
  )
}

export default NavBar