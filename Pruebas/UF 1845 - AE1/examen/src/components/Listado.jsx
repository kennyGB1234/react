import React from 'react'


const Listado = (lista) => {
  const nuevaLista = lista.datos
  return (
    <div>
        <h1 key={lista.id}>Cliente</h1>
        {nuevaLista.map((nueva)=>{
    return    <ul>
        
            <li><strong>Nombre: </strong>  {nueva.nombre}</li>
            <li><strong>Raza: </strong>{nueva.raza}</li>
            <li><strong>Edad: </strong>{nueva.edad}</li>
            <li><strong>Diagnostico: </strong>{nueva.diagnostico}</li>
            <li><strong>Propietario: </strong>{nueva.propietario}</li>
          </ul>
        })}
        </div>
  )
}

export default Listado