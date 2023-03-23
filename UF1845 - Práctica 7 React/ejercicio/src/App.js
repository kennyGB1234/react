
import './App.css';
import Formulario from './components/Formulario';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Nf from './pages/Nf';
import Navbar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="*" element={<Nf />} />
    <Route path="/contactos" element={<Navigate to="/contacto" />} />


      </Routes>
</Router>
    </div>
  );
}

export default App;
