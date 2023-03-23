import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";



const Formulario = ({onNuevoDato}) => {

    

  const[error , setError] = useState(false);
  const[nuevoNombre, setNuevoNombre] = useState("")
  const[nuevoRaza, setNuevoRaza] = useState("")
  const[nuevoEdad, setNuevoEdad] = useState("")
  const[nuevoDiagnostico, setNuevoDiagnostico] = useState("")
  const[nuevoPropietario, setNuevoPropietario] = useState("")

  const setNombre = (event) => {
    setNuevoNombre(event.target.value)
  }

  const setRaza = (event) => {
    setNuevoRaza(event.target.value)
  }

  const setEdad =(event) => {
    setNuevoEdad(event.target.value)
  }

  const setDiagnostico =(event) => {
    setNuevoDiagnostico(event.target.value)
  }

  const setPropietario =(event) => {
    setNuevoPropietario(event.target.value)
  }


  const setEnviar = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoNombre.trim() === "" ||
      nuevoRaza.trim() === "" ||
      nuevoEdad.trim() === "" ||
      nuevoRaza.trim() === "" ||
      nuevoDiagnostico.trim() === "" ||
      nuevoPropietario.trim() === "" 
    ) {
      setError(true);
      return;
    }
     const Nuevo = {
      id: uuidv4(),
      nombre: nuevoNombre,
      raza: nuevoRaza,
      edad: nuevoEdad,
      diagnostico: nuevoDiagnostico,
      propietario: nuevoPropietario,};
      
      
    onNuevoDato(Nuevo)
    setNuevoNombre("")
    setNuevoRaza("")
    setNuevoEdad("")
    setNuevoDiagnostico("")
    setNuevoPropietario("")
}


  return (
    <div className='contenedor'>
                 
        <div className='form'>
                <h1>Formulario</h1>
                {error ? (<h3>Porfavor rellene todos los datos</h3>) : null }
            <form  onSubmit={setEnviar} action="">
                <br />
                <label htmlFor="nombre">Nombre de la mascota : </label>
                <input type="text" name='nombre' id='nombre' placeholder='Introduzca nombre de la mascota'
                onChange={setNombre} value={nuevoNombre} />
                <br />
                <label htmlFor="raza">Raza : </label>
                <input type="text" name="raza" id="raza" placeholder='Introduzca el tipo de raza'
                onChange={setRaza}  value={nuevoRaza}  />
                <br />
                <label htmlFor="edad">Edad : </label>
                <input type="number" name="edad" id="edad" onChange={setEdad}  value={nuevoEdad} min="1" />
                <br />
                <label htmlFor="diagnostico">Diagnostico : </label>
                <input type="text" name="diagnostico" id="diagnostico" placeholder='Introduzca el diagnostico'
                onChange={setDiagnostico}  value={nuevoDiagnostico}  />
                <br />
                <label htmlFor="diagnostico">Propietario : </label>
                <input type="text" name="propietario" id="propietario" placeholder='Introduzca el propietario'
                onChange={setPropietario}  value={nuevoPropietario}  />
                <br />
                <button type="submit">Enviar</button>
            </form>


  


        </div>


    </div>
  )
}

export default Formulario;