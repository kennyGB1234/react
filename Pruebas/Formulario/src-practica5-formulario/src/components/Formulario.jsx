import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Listado from './Listado';

const Formulario = () => {

const [datos, setDatos] = useState ([{
    id : 1,
    nombre : 'Nombre de mascota',
    raza : 'Raza de la mascota',
    edad : 99 ,
    diagnostico : 'Diagnostico de la mascota',
    propietario : 'Nombre del propietario'
}
])

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
      nuevoRaza.trim() === "" 
    ) {
      setError(true);
      return;
    }
    setDatos([
        ...datos, {
            id: uuidv4(),
            nombre : nuevoNombre,
            raza : nuevoRaza,
            edad : nuevoEdad,
            diagnostico : nuevoDiagnostico,
            propietario : nuevoPropietario
        },
    ]);
    setNuevoNombre("")
    setNuevoRaza("")
    setNuevoEdad("")
    setNuevoDiagnostico("")
    setNuevoPropietario("")
}


  return (
    <div className='contenedor'>
                     {datos.map((nuevos) => (
                <Listado key={nuevos.id}  lista={nuevos} />
            ))}

        <div className='form'>
                <h1>Creamos el Formulario :</h1>
                {error ? (<h3>Porfavor rellene todos los datos</h3>) : null }
            <form  onSubmit={setEnviar} action="">
                <br />
                <label htmlFor="nombre">Nombre : </label>
                <input type="text" name='nombre' id='nombre' placeholder='introduzca su nombre'
                onChange={setNombre} value={nuevoNombre} />
                <br />
                <label htmlFor="raza">Raza : </label>
                <input type="number" name="raza" id="raza" placeholder='su raza' min={18} max={70}
                onChange={setRaza}  value={nuevoRaza}  />
                <br />
                <label htmlFor="edad">Edad : </label>
                <label htmlFor="hombre">Hombre </label>
                <input type="radio" name="" id="edad" onChange={setEdad}  value='hombre'  checked={nuevoEdad === 'hombre'} />
                <label htmlFor="mujer">Mujer </label>
                <input type="radio" name="mujer" id="edad" onChange={setEdad} value='mujer' checked={nuevoEdad === 'mujer'}/>
                <br />
                <label htmlFor="diagnostico">Diagnostico : </label>
                <select name="diagnostico" id="diagnostico" onChange={setDiagnostico} value={nuevoDiagnostico} > 
                    <option value=""></option>
                    <option value="España">España</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="India">India</option>
                    <option value="USA">Estados Unidos</option>
                </select>
                <br />
                <label htmlFor="propietario">Propietario : </label>
                <input type="text" name='propietario' id='propietario' placeholder='Introduzca el nombre del propietario'
                onChange={setPropietario} value={nuevoPropietario} />
                <button type="submit">Enviar</button>
            </form>


  


        </div>


    </div>
  )
}

export default Formulario;