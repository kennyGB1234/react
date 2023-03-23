import React from 'react'

const ListaElemento = ({autor,fecha,mensaje}) => {
  return (
    <div>
            <h3 key={autor.id}>-----------------------------</h3>
    <h3>{autor}</h3>
    <h3>{fecha}</h3>
    <h3>{mensaje}</h3>
    </div>

  )
}

export default ListaElemento