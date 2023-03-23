import React, { useState } from 'react'
import Unico from './Unico';
import { v4 as uuidv4 } from "uuid";

// USUARIOS 
const Pruebas = () => {
  

        const [usuarios , setUsuarios] = useState ([
    {id: 1, nombre: 'Fernando', email: 'fernando123@gmail.com', nickname:'Fernadito01'},
    {id: 2, nombre: 'Sandra', email: 'sandrita1975@gmail.com', nickname:'SandraLaMejor'},
    {id: 3, nombre: 'Roberto', email: 'rober456@gmail.com', nickname:'RoberFutbolista1'},
    {id: 4, nombre: 'Rosa', email: '22Ros@gmail.com', nickname:'Ros22154'}
  ]);

  const [nuevoNombre, setNuevoNombre] = useState([""]);
  const [nuevoEmail, setNuevoEmail] = useState([""]);
  const [nuevoNickname, setNuevoNickname] = useState([""]);

  const gestorCambioNombre = (event) => {
    setNuevoNombre(event.target.value);
  };
  const gestorCambioEmail = (event) => {
    setNuevoEmail(event.target.value);
  };
  const gestorCambioNickname = (event) => {
    setNuevoNickname(event.target.value);
  };

  const gestorSubmit = (e) => {
    e.preventDefault();
    setUsuarios([
      ...usuarios, 
      {
        id: uuidv4(),
        nombre: nuevoNombre,
        email: nuevoEmail,
        nickname: nuevoNickname,
      },
    ]);

    console.log(usuarios);
  };

 
  return (
    <div className='usu'>
        <h1>Lista de usuarios</h1>
        <ul>
          {usuarios.map((usuario)=>(
          <Unico key={usuario.id} usuario={usuario} />
          ))}
        </ul>

        {/* este es el map , abajo empieza el formulario */}
    <div>
    <div className="container all-center">
        <h1>Formulario de Alta</h1>
        <form onSubmit={gestorSubmit} action="">
          <label htmlFor="nombre">Nombre</label>
          <input
            onChange={gestorCambioNombre}
            className="form-text"
            type="text"
            name="nombre"
            id="nombre"
            value={nuevoNombre}
            required
          />
          <label htmlFor="E-mail">E-mail</label>
          <input
            onChange={gestorCambioEmail}
            className="form-text"
            type="email"
            name="E-mail"
            id="E-mail"
            value={nuevoEmail}
            required
          />
          <label htmlFor="text">Nickname</label>
          <input
            onChange={gestorCambioNickname}
            className="form-text"
            type="text"
            name="nickname"
            id="nickname"
            value={nuevoNickname}
            required
          />
  
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
    </div>
  )
          }


export default Pruebas

