// import logo from "./images/starbucks-log.svg";
import "./App.css";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div className="App">
      <div class="alert alert-secondary" role="alert">
        A simple primary alert—check it out!
      </div>

      <header className="App-header">
        <Formulario />
      </header>
    </div>
  );
}

export default App;
