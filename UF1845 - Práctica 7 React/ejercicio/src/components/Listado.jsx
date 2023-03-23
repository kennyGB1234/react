import React from 'react'

const Listado = ({lista}) => {
  return (
    <div className='contenedorDos'>
    <div className='datos'>
        <h1 key={lista.id}>Listado</h1>
        <ul>
            <li>{lista.nombre}</li>
            <li>{lista.edad}</li>
            <li>{lista.sexo}</li>
            <li>{lista.nacionalidad}</li>

        </ul>


    </div>
    </div>
  )
}

export default Listado