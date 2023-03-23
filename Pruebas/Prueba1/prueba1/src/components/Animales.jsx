import React from 'react'
import Animal from './Animal'



const Animales = (info) => {
  const contenedor = info.caja
  return (
    <div>
       <h2>Animal</h2>
       <ul>
				{contenedor.map((dato) => (
					 <Animal key={dato.id} contenedorDos = {dato} />
				))}
			</ul>

</div>

  )
}

export default Animales