
import './App.css';
import Animales from './components/Animales';


function App() {

  const mascotas = [
    {id: 1, nombre: 'Eiko', raza: 'Pastor Aleman', edad: 7,diagnostico:'Quemadura', propietario:'Kenny',},
    {id: 2, nombre: 'Maui', raza: 'Gato esfinge', edad: 4,diagnostico:'Atragantamiento', propietario:'Nuria',},
    {id: 3, nombre: 'Piolin', raza: 'Periquito', edad: 2,diagnostico:'Pata rota', propietario:'Juan',},
    {id: 4, nombre: 'Coco', raza: 'Guacamayo', edad: 1,diagnostico:'Tumor', propietario:'Linda'}
  ];

  return (
    <div>
      <h1>Listado de todos los animales
      </h1>
      <div><Animales caja = {mascotas}/></div>
    </div>

  )
  }

export default App;
