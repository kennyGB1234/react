import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Desconocido from "./pages/Desconocido";
import Navbar from "./components/Navbar";
import Usuarios from "./components/Usuarios";
import Terminos from "./pages/Terminos";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* path='' element={<Elemento/>} */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuario" element={<Navigate to="/usuarios" />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="*" element={<Desconocido />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
