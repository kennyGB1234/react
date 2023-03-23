import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Listado from './Listado';



const Formulario = () => {

    const [datos, setDatos] = useState ([{
        id : 1,
        nombre : 'uuu',
        edad : 90,
        sexo :'mujer' ,
        nacionalidad : 'Italia'
    }
    ])
    
      const[error , setError] = useState(false);
      const[nuevoNombre, setNuevoNombre] = useState('')
      const[nuevoEdad, setNuevoEdad] = useState('')
      const[nuevoSexo, setNuevoSexo] = useState('')
      const[nuevoNacionalidad, setNuevoNacionalidad] = useState('')
    
      const setNombre = (event) => {
        setNuevoNombre(event.target.value)
      }
    
      const setEdad = (event) => {
        setNuevoEdad(event.target.value)
      }
    
      const setSexo =(event) => {
        setNuevoSexo(event.target.value)
      }
    
      const setNacionalidad =(event) => {
        setNuevoNacionalidad(event.target.value)
      }
    
    
      const setEnviar = (e) => {
        e.preventDefault();
        setError(false);
        if (
          nuevoNombre.trim() === "" ||
          nuevoEdad.trim() === "" 
        ) {
          setError(true);
          return;
        }
        setDatos([
            ...datos, {
                id: uuidv4(),
                nombre : nuevoNombre,
                edad : nuevoEdad,
                sexo : nuevoSexo,
                nacionalidad : nuevoNacionalidad
            },
        ]);
        setNuevoNombre("")
        setNuevoEdad("")
        setNuevoSexo("")
        setNuevoNacionalidad("")
    }
    
    
      return (
        <div className='contenedor'>
                         {datos.map((nuevos) => (
                    <Listado className='lista' key={nuevos.id}  lista={nuevos} />
                ))}
    
            <div className='form'>
                    <h1>Formulario</h1>
                    {error ? (<h3> * Debe completar todos los campos</h3>) : null }
                <form  onSubmit={setEnviar} action="">
                    <br />
                    <label htmlFor="nombre">Nombre : </label>
                    <input type="text" name='nombre' id='nombre' placeholder='introduzca su nombre'
                    onChange={setNombre} value={nuevoNombre} />
                    <br />
                    <label htmlFor="edad">Edad : </label>
                    <input type="number" name="edad" id="edad" placeholder='su edad' min={18} max={70}
                    onChange={setEdad}  value={nuevoEdad}  />
                    <br />
                    <label htmlFor="sexo">Sexo : </label>
                    <label htmlFor="hombre">Hombre </label>
                    <input type="radio" name="" id="sexo" onChange={setSexo}  value='hombre'  checked={nuevoSexo === 'hombre'} />
                    <label htmlFor="mujer">Mujer </label>
                    <input type="radio" name="mujer" id="sexo" onChange={setSexo} value='mujer' checked={nuevoSexo === 'mujer'}/>
                    <br />
                    <label htmlFor="nacionalidad">Nacionalidad : </label>
                    <select name="nacionalidad" id="nacionalidad" onChange={setNacionalidad} value={nuevoNacionalidad} > 
                        <option value=""></option>
                        <option value="España">España</option>
                        <option value="Alemania">Alemania</option>
                        <option value="Irlanda">Irlanda</option>
                        <option value="Portugal">Portugal</option>
                    </select>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
    
    
      
    
    
            </div>
    
    
        </div>
      )
    }
    
    export default Formulario;