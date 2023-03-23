import { useState } from "react";
import "./App.css";
import Listado from "./componentes/Listado";
import AltaModelo from "./componentes/AltaModelo";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const inicialDatos = {
    id : 1,
        nombre : 'uuu',
        edad : 90,
        sexo :'mujer' ,
        nacionalidad : 'Italia'
  };

  const [Datos, setDatos] = useState([inicialDatos]);
 
  const creaNuevoDato = (Dato) => {
    setDatos([...Datos, Dato]);
  };

  return (
    <div className="App">
      <div className="tres">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Formulario</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Objetivo</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
 
        <div className="uno">
          <AltaModelo onNuevoDato={creaNuevoDato} />
        </div>
        <div className="dos">
          <Listado Datos={Datos} />
        </div>
        <div className="cuatro">
        <Card className="text-center">
      <Card.Header >Featured</Card.Header>
      <Card.Body >
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
      
    </div>
  );
}

export default App;
