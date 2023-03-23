import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const NuevoUsuario = ({ addUser }) => {
	const [nuevoNombre, setNuevoNombre] = useState('');
	const [nuevoEmail, setNuevoEmail] = useState('');
	const [nuevoPassword, setNuevoPassword] = useState('');

	const gestorSubmit = (e) => {
		e.preventDefault();

		const user = {
			id: uuidv4(),
			nombre: nuevoNombre,
			email: nuevoEmail,
			password: nuevoPassword,
		};
		addUser(user);
		setNuevoNombre('');
		setNuevoEmail('');
		setNuevoPassword('');
	};

	const gestorCambioNombre = (e) => {
		setNuevoNombre(e.target.value);
	};
	const gestorCambioEmail = (e) => {
		setNuevoEmail(e.target.value);
	};
	const gestorCambioPassword = (e) => {
		setNuevoPassword(e.target.value);
	};

	return (
		<div>
			<h1>Formulario de Alta</h1>
			<form onSubmit={gestorSubmit}>
				<input
					type={'text'}
					name={'nombre'}
					id={'nombre'}
					value={nuevoNombre}
					onChange={gestorCambioNombre}
					placeholder={'Name'}
				/>
				<Form.Group
					as={Row}
					className='mb-3'
					controlId='formPlaintextEmail'
				></Form.Group>
				<input
					type={'email'}
					name={'email'}
					id={'email'}
					value={nuevoEmail}
					onChange={gestorCambioEmail}
					placeholder={'Email'}
				/>
				<Form.Group
					as={Row}
					className='mb-3'
					controlId='formPlaintextEmail'
				></Form.Group>
				<input
					type={'password'}
					name={'password'}
					id={'password'}
					value={nuevoPassword}
					onChange={gestorCambioPassword}
					placeholder={'Password'}
				/>
				<Form.Group
					as={Row}
					className='mb-3'
					controlId='formPlaintextEmail'
				></Form.Group>
				<Button variant='primary' type={'submit'} value={'Finish'}>
					{' '}
					Añadir{' '}
				</Button>
			</form>
		</div>
	);
};

export default NuevoUsuario;
