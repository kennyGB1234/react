import React from 'react'
import Unico from './Unico';

const Pruebas = () => {

        const usuarios = [
    {id: 1, nombre: 'Fernando', email: 'fernando123@gmail.com', nickname:'Fernadito01'},
    {id: 2, nombre: 'Sandra', email: 'sandrita1975@gmail.com', nickname:'SandraLaMejor'},
    {id: 3, nombre: 'Roberto', email: 'rober456@gmail.com', nickname:'RoberFutbolista1'},
    {id: 4, nombre: 'Rosa', email: '22Ros@gmail.com', nickname:'Ros22154'}
  ];

  return (
    <div className='usu'>
        <h1>Lista de usuarios</h1>
        <ul>
          {usuarios.map((usuario)=>(
          <Unico key={usuario.id} usuario={usuario} />
          ))}
        </ul>
    </div>
  )
          }


export default Pruebas