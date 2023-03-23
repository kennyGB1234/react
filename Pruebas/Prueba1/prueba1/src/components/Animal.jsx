import React from 'react'


const Animal = ({contenedorDos}) => {
  return ( 
  <div className='caja'>
    <div className='informes'>
       
        <h3>Informe {contenedorDos.nombre} </h3>
        
        <ul>
            <li><strong>Nombre: </strong>{contenedorDos.nombre}</li>
            <li><strong>Raza: </strong>{contenedorDos.raza}</li>
            <li><strong>Edad: </strong>{contenedorDos.edad}</li>
            <li><strong>Diagnostico: </strong>{contenedorDos.diagnostico}</li>
            <li><strong>Propietario: </strong>{contenedorDos.propietario}</li>
        </ul>



    </div></div>
  )
}

export default Animal