import React from 'react'

const Listado = ({lista}) => {
  return (
    <div>
        <h1 key={lista.id}>Listado Actualizado :</h1>
        <ul>
            <li>{lista.nombre}</li>
            <li>{lista.edad}</li>
            <li>{lista.sexo}</li>
            <li>{lista.nacionalidad}</li>

        </ul>


    </div>
  )
}

export default Listado