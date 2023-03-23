import React from 'react'
import ListaElemento from './ListaElemento';


const comentarios = [
  {id: 1, autor: 'Alvaro', fecha: '04/03/2023', mensaje:'El mejor blog'},
  {id: 2, autor: 'Laura', fecha: '05/03/2023', mensaje:'Podria mejorar'},
  {id: 3, autor: 'Lucas', fecha: '06/03/2023', mensaje:'Le doy 4 estrellas'},
  {id: 4, autor: 'Ana', fecha: '07/03/2023', mensaje:'Poco intuitivo'}
  
];
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
      {comentarios.map((usuario)=>(
      <ListaElemento key={usuario.id} autor={usuario.autor} fecha={usuario.fecha} mensaje={usuario.mensaje}/>
      ))}
    </ul>
  </div>
)
}

export default BlogDos