import React from 'react'
import './Enlaces.css';

export const Enlaces = () => {
    const caja = ['https://www.google.es/','https://www.marca.com/','https://www.canarias7.es/','https://as.com/']
  return (
    <div className='aa'>
        <h1 className='titulo'>5- Crear un componente que muestre un lista (html) con 4 enlaces típicos de una web general</h1>
        <ol>
            <li><a href={caja[0]}>Enlace a google</a>
            </li>
            <li>
                <a href={caja[1]}>Enlace a marca</a>
            </li>
            <li>
                <a href={caja[2]}>Enlace a Canarias7</a>
            </li>
            <li>
                <a href={caja[3]}>Enlace a AS</a>
            </li>
        </ol>
    </div>
  )
}
