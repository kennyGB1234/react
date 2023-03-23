import React from 'react'
import './Usuarios.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Usuario = ({ usuario, deleteUser }) => {



	const gestorDelete = () => {
		deleteUser(usuario.id)

	}



	return (
		<div>
			<Card style={{ width: '18rem' }} key={usuario.id} className="m-3 ">

				<Card.Body>
					<Card.Title>{usuario.nombre}</Card.Title>
					<Card.Text>
						<p>{usuario.email}</p>
						<p>	{usuario.password}</p>
					</Card.Text>
					<Button variant="danger" type={'button'} onClick={gestorDelete}>Delete</Button>
				</Card.Body>
			</Card>
			{/* <ul className='usuarios'>
				<li key={usuario.id} className='usuarios'>
					<p>{usuario.nombre}</p>
					<p>{usuario.email}</p>
					<p>{usuario.password}</p>
					<button type={'button'} onClick={gestorDelete} >delete</button>
				</li>
			</ul> */}
		</div>
	)
}

export default Usuario