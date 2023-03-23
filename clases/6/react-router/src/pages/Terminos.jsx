import React from "react";
import { useNavigate } from "react-router-dom";

const Terminos = () => {
  const navigate = useNavigate();

  const gestorCerrar = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Términos y Condiciones</h1>
      <button onClick={gestorCerrar}>Cerrar</button>
    </div>
  );
};

export default Terminos;
