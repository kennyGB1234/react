import { useState } from "react";
import "./App.css";
import Listado from "./componentes/Listado";
import AltaModelo from "./componentes/AltaModelo";

function App() {
  const inicialZapatos = {
    id: "001",
    marca: "Martinelli",
    modelo: "piel suave",
    precio: 100,
  };

  const [zapatos, setZapatos] = useState([inicialZapatos]);
  console.log(zapatos);
  const creaNuevoZapato = (zapato) => {
    setZapatos([...zapatos, zapato]);
  };

  return (
    <div className="App">
      <AltaModelo onNuevoZapato={creaNuevoZapato} />
      <Listado zapatos={zapatos} />
    </div>
  );
}

export default App;
