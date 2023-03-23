import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import './Usuarios.css'

const Mensaje = ({ mensaje, deleteMensaje }) => {
	const gestorDelete = () => {
		deleteMensaje(mensaje.id);
	};

	return (
		<div className='mensaje'>
			<Card className='mb-3'>
				<Card.Header>{mensaje.autor}</Card.Header>
				<Card.Body>
					<Card.Title>{mensaje.fecha}</Card.Title>
					<Card.Text>{mensaje.mensaje}</Card.Text>
					<Button variant='danger' onClick={gestorDelete}>
						Eliminar
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Mensaje;
