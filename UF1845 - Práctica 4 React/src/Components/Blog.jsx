import React, { useState } from 'react'
import ListaElemento from './ListaElemento';
import { v4 as uuidv4 } from "uuid";


// const Blog = () => {
//   return (
//     <div>
// <h1>
// 				Mensajes:
// 			</h1>
// 			<ul>
//       <li>{comentarios[0].autor}</li>
//       <li>{comentarios[0].fecha}</li>
// 				<li>{comentarios[0].mensaje}</li>
//         <li>{comentarios[1].autor}</li>
//       <li>{comentarios[1].fecha}</li>
// 				<li>{comentarios[1].mensaje}</li>
//         <li>{comentarios[2].autor}</li>
//       <li>{comentarios[2].fecha}</li>
// 				<li>{comentarios[2].mensaje}</li>
//         <li>{comentarios[3].autor}</li>
//       <li>{comentarios[3].fecha}</li>
// 				<li>{comentarios[3].mensaje}</li>
// 			</ul>
//     </div>
//   )
// }

// export default Blog



const BlogDos = () => {

  const [usuarios , setUsuarios] = useState ([
    {id: 1, autor: 'Alvaro', fecha: '04/03/2023', mensaje:'El mejor blog'},
    {id: 2, autor: 'Laura', fecha: '05/03/2023', mensaje:'Podria mejorar'},
    {id: 3, autor: 'Lucas', fecha: '06/03/2023', mensaje:'Le doy 4 estrellas'},
    {id: 4, autor: 'Ana', fecha: '07/03/2023', mensaje:'Poco intuitivo'}
    
  ]);
  
  const [nuevoAutor, setNuevoAutor] = useState([""]);
    const [nuevoFecha, setNuevoFecha] = useState([""]);
    const [nuevoMensaje, setNuevoMensaje] = useState([""]);
  
    
    const gestorCambioAutor = (event) => {
      setNuevoAutor(event.target.value);
    };
    const gestorCambioFecha = (event) => {
      setNuevoFecha(event.target.value);
    };
    const gestorCambioMensaje = (event) => {
      setNuevoMensaje(event.target.value);
    };
  
    const gestorSubmit = (e) => {
      e.preventDefault();
      setUsuarios([
        ...usuarios, 
        {
          id: uuidv4(),
          autor: nuevoAutor,
          fecha: nuevoFecha,
          mensaje: nuevoMensaje,
        },
      ]);
  
      console.log(usuarios);
    };

//   return (
//     <div>
// <h1>
// 				Listar Mensajes:
// 			</h1>
//      	<ul>
// 				{comentarios.map((comentario) => (
// 					<li>{comentario.mensaje}</li>
// 				))}
// 			</ul>
//     </div>
//   )

// }

// export default BlogDos

return (
  <div>
    <h2>Listado de mensajes</h2>
    <ul>
      {usuarios.map((usuario)=>(
      <ListaElemento key={usuario.id} autor={usuario.autor} fecha={usuario.fecha} mensaje={usuario.mensaje}/>
      ))}
    </ul>
    <div>
    <div className="container all-center">
        <h1>Formulario de Alta</h1>
        <form onSubmit={gestorSubmit} action="">
          <label htmlFor="nombre">Autor</label>
          <input
            onChange={gestorCambioAutor}
            className="form-text"
            type="text"
            name="nombre"
            id="nombre"
            value={nuevoAutor}
            required
          />
          <label htmlFor="E-mail">Fecha</label>
          <input
            onChange={gestorCambioFecha}
            className="form-text"
            type="date"
            name="E-mail"
            id="E-mail"
            value={nuevoFecha}
            required
          />
          <br />
          <label htmlFor="text">Mensaje</label>
          <input
            onChange={gestorCambioMensaje}
            className="form-text"
            type="text"
            name="nickname"
            id="nickname"
            value={nuevoMensaje}
            required
          />
  
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
  </div>
  </div>
  
)
}

export default BlogDos