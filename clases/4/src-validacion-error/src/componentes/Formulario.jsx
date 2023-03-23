import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = () => {
  const [usuarios, setUsuarios] = useState([
    {
      id: uuidv4(),
      nombre: "José",
      password: "dslkjfsldfk",
      email: "jose@casa.com",
    },
  ]);
  const [error, setError] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoEmail, setNuevoEmail] = useState("");
  const [nuevoPassword, setNuevoPassword] = useState("");

  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoNombre.trim() === "" ||
      nuevoEmail.trim() === "" ||
      nuevoPassword.trim() === ""
    ) {
      setError(true);
      return;
    }
    setUsuarios([
      ...usuarios, // ...añadírselo al array que guarda los usuarios
      {
        id: uuidv4(),
        nombre: nuevoNombre,
        password: nuevoPassword,
        email: nuevoEmail,
      },
    ]);
    console.log(usuarios);
    setNuevoNombre("");
    setNuevoEmail("");
    setNuevoPassword("");
  };

  const gestorCambioNombre = (event) => {
    setNuevoNombre(event.target.value);
  };
  const gestorCambioEmail = (event) => {
    setNuevoEmail(event.target.value);
  };
  const gestorCambioPassword = (event) => {
    setNuevoPassword(event.target.value);
  };

  return (
    <div className="container all-center">
      <h1>Formulario de Alta</h1>
      {error ? <h3>Debe completar todos los campos</h3> : null}
      <form onSubmit={gestorSubmit} action="">
        <label htmlFor="nombre">Nombre</label>
        <input
          onChange={gestorCambioNombre}
          className="form-text"
          type="text"
          name="nombre"
          id="nombre"
          value={nuevoNombre}
        />
        <label htmlFor="E-mail">E-mail</label>
        <input
          onChange={gestorCambioEmail}
          className="form-text"
          type="email"
          name="E-mail"
          id="E-mail"
          value={nuevoEmail}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          onChange={gestorCambioPassword}
          className="form-text"
          type="password"
          name="password"
          id="password"
          value={nuevoPassword}
        />

        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
