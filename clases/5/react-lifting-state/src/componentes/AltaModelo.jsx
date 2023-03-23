import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AltaModelo = ({ onNuevoZapato }) => {
  const [error, setError] = useState(false);

  const [nuevaMarca, setNuevaMarca] = useState("");
  const [nuevoModelo, setNuevoModelo] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");

  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevaMarca.trim() === "" ||
      nuevoModelo.trim() === "" ||
      nuevoPrecio.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Crear un nuevo objeto con los datos del formulario.
    const nuevoDato = {
      id: uuidv4(),
      marca: nuevaMarca,
      modelo: nuevoModelo,
      precio: nuevoPrecio,
    };

    // Ahora usamos la función que recibimos por props para actualizar la lista de zapatos
    onNuevoZapato(nuevoZapato);

    setNuevaMarca("");
    setNuevoModelo("");
    setNuevoPrecio("");
  };

  const gestorCambioMarca = (e) => {
    setNuevaMarca(e.target.value);
  };
  const gestorCambioModelo = (e) => {
    setNuevoModelo(e.target.value);
  };
  const gestorCambioPrecio = (e) => {
    setNuevoPrecio(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1>Creación de Modelos</h1>
        {error ? (
          <h3 className="error-campos">Debe completar todos los campos</h3>
        ) : null}
        <form onSubmit={gestorSubmit} action="">
          <label htmlFor="marca">marca</label>
          <input
            onChange={gestorCambioMarca}
            className="form-text"
            type="text"
            name="marca"
            id="marca"
            value={nuevaMarca}
          />
          <label htmlFor="modelo">Modelo</label>
          <input
            onChange={gestorCambioModelo}
            className="form-text"
            type="modelo"
            name="modelo"
            id="modelo"
            value={nuevoModelo}
          />
          <label htmlFor="precio">Precio</label>
          <input
            onChange={gestorCambioPrecio}
            className="form-text"
            type="number"
            name="precio"
            id="precio"
            value={nuevoPrecio}
          />
          <button className="btn btn-success" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AltaModelo;
