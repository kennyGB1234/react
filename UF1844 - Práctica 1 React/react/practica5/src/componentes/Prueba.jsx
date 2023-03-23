import React from 'react'
import './Prueba.css';

export const Prueba = () => {
  return (
<div className='contenedor'>
<h1 className='titulo'>3- Crear formulario en otro componente, y 4 – Añadir el componente anterior al componente App.</h1>
<form>
<ul>
<li>
<label for="name">Nombre:  </label>
<input type="text" id="name" name="nombre" className='campo'></input>
</li>
<li>
<label for="mail">Correo electrónico:  </label>
<input type="email" id="mail" name="email" className='campo'></input>
</li>
<li>
<label for="contra">Contraseña:  </label>
<input type="password" id="contra" name="contraseña" className='campo'></input>
</li>
</ul>
<button type="submit">Enviar formulario</button>
</form>
</div>
  )
}

export default Prueba
