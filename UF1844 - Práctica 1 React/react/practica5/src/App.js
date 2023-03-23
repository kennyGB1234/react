
import './App.css';
import Prueba from './componentes/Prueba';
import { Enlaces } from './componentes/Enlaces';

function App() {
  return (
   <div>
    <h1 className='titulo'>2- En la app del ejercicio 1, hacer que muestre un H1, un H2, párrafo y lista.</h1>
    <h1>Este es un H1</h1>
    <h2>Este es un H2</h2>
    <p>Este es un parrafo creado directamente en App.js</p>
    <ul>
      <li>Lista 1</li>
      <li>Lista 2</li>
      <li>Lista 3</li>
    </ul>
    <div>
      <Prueba></Prueba>
    </div>
    <div>
      <Enlaces></Enlaces>
    </div>
</div>

  );
}

export default App;
