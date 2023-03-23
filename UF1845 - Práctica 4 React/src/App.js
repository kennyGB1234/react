
import './App.css';
import Blog from './Components/Blog';

import Pruebas from './Components/Pruebas';


function App() {
  const mensajes = Math.round(Math.random() * 1)
  mensajes? <h1>Hay mensajes nuevos</h1>:<h1>No hay mensajes nuevos</h1>
  return (
    <div className='contenedor'>
      <div className='uno'>
      <h1>
        Gestión de mensajes
      </h1>
      <h3>
        {mensajes? <Blog />:<h1>No hay mensajes nuevos</h1>}
      </h3>
        
      </div>
    <div className='dos'>
      <Pruebas/>
    </div>
    <div>

    </div>
    </div>
  );
}

export default App;


