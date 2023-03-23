import React from 'react'
import './Blog.css';
import Mensaje from './Mensaje';

const Blog = ({ mensaList, deleteMensaje }) => {



	return (
		<div>
			<h2>Mensajes</h2>
			{mensaList.map((mensaje) => {
				return <Mensaje key={mensaje.id} mensaje={mensaje} deleteMensaje={deleteMensaje} />
			})}
		</div>
	)
};

export default Blog;
