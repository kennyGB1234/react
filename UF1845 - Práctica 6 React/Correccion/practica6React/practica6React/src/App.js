import React, { useState } from "react";
import "./App.css";
import NuevoBlog from "./components/NuevoBlog";
import NuevoUsuario from "./components/NuevoUsuario";
import Usuarios from "./components/Usuarios";

import Blog from "./components/Blog"
import { v4 as uuid } from 'uuid'

function App() {
  const mensajes = [
    {
      id: uuid(),
      mensaje: "Hoy he aprendido a desprogramar. No es tarea fácil",
      autor: "Macana",
      fecha: "21/04/2022",
    },
    {
      id: uuid(),
      mensaje: "En programación, lo único seguro es que el lenguaje que hoy aprendas te servirá para el futuro. Un futuro sin ese lenguaje, probablemente",
      autor: "Pinocho Waltz",
      fecha: "11/05/2022",
    },
    {
      id: uuid(),
      mensaje: "La esencia de la programación es saber programar",
      autor: "Cobol Pro",
      fecha: "13/06/2022",
    },
    {
      id: uuid(),
      mensaje: "Cuando haces React ya no hay stap",
      autor: "React_oneLover",
      fecha: "15/10/2022",
    },
  ];
  const [mensa, setMensa] = useState(mensajes)
  const nuevoMensaje = (mensaje) => {
    setMensa([...mensa, mensaje])
  }

  const deleteMensaje = (id) => {
    setMensa(mensa.filter(item => {
      return item.id !== id
    }))
  }

  const usuarios = [
    {
      id: uuid(),
      nombre: "Macana",
      email: "macana@neverland.com",
      password: "ws9e78rf",
    },
    {
      id: uuid(),
      nombre: "Pinocho Waltz",
      email: "piwaltz@neverland.com",
      password: "sd798ssdf",
    },
    {
      id: uuid(),
      nombre: "Cobol Pro",
      email: "cobpro@neverland.com",
      password: "der45&%",
    },
    {
      id: uuid(),
      nombre: "React_oneLover",
      email: "reactonelover@neverland.com",
      password: "fgh(&/%345",
    },
  ];


  const [user, setUser] = useState(usuarios)
  const nuevoUser = (users) => {
    setUser([...user, users])
  }

  const deleteUser = (id) => {
    setUser(user.filter(item => {
      return item.id !== id
    }))
  }




  // let hayMensajesNuevos = false;
  // const aleatorio = Math.floor(Math.random() * 2);
  //aleatorio === 1 ? (hayMensajesNuevos = true) : (hayMensajesNuevos = false);

  return (
    <div className="App">

      <NuevoUsuario addUser={nuevoUser} />
      <Usuarios userList={user} deleteUser={deleteUser} />

      <NuevoBlog addMensaje={nuevoMensaje} />
      <Blog mensaList={mensa} deleteMensaje={deleteMensaje} />

    </div>
  );
}

export default App;
