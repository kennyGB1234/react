import React from 'react'

const Unico = ({usuario}) => {
  return (
    <div>
    <h3 key={usuario.id}>=================== </h3>
    <h3>{usuario.nombre}</h3>
    <h3>{usuario.email}</h3>
    <h3>{usuario.nickname}</h3>
    </div>

  )
}

export default Unico