import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Listado from './components/Listado';


function App() {

  const mascotas = [
    {id: 1, nombre: 'Eiko', raza: 'Pastor Aleman', edad: 7,diagnostico:'Quemadura', propietario:'Kenny',},
    {id: 2, nombre: 'Maui', raza: 'Gato esfinge', edad: 4,diagnostico:'Atragantamiento', propietario:'Nuria',},
    {id: 3, nombre: 'Piolin', raza: 'Periquito', edad: 2,diagnostico:'Pata rota', propietario:'Juan',},
    {id: 4, nombre: 'Coco', raza: 'Guacamayo', edad: 1,diagnostico:'Tumor', propietario:'Linda'}
  ];


  const [Datos, setDatos] = useState(mascotas);
 
  const creaNuevoDato = (mascotas) => {
    setDatos([...Datos, mascotas]);
  };


  return (
    <div className="App">
     <div><Formulario onNuevoDato={creaNuevoDato} /></div>
     <div><Listado datos = {Datos} /></div>
    </div>
  );
}

export default App;
