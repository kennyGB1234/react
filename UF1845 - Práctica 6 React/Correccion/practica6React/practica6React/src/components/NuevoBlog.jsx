import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button';

const NuevoBlog = ({ addMensaje }) => {
	const [nuevoAutor, setNuevoAutor] = useState('');
	const [nuevoMensaje, setNuevoMensaje] = useState('');
	const [nuevaFecha, setNuevaFecha] = useState('');

	const gestorSubmit = (e) => {
		e.preventDefault();
		const nuevoBlog = {
			id: uuid(),
			autor: nuevoAutor,
			mensaje: nuevoMensaje,
			fecha: nuevaFecha,
		};
		addMensaje(nuevoBlog);
		setNuevoAutor('');
		setNuevoMensaje('');
		setNuevaFecha('');
	};

	const gestorCambioAutor = (e) => {
		setNuevoAutor(e.target.value);
	};
	const gestorCambioMensaje = (e) => {
		setNuevoMensaje(e.target.value);
	};
	const gestorCambioFecha = (e) => {
		setNuevaFecha(e.target.value);
	};

	return (
		<div>
			<h1>Nuevo Mensaje</h1>
			<br></br>
			<form action='' onSubmit={gestorSubmit}>
				<input
					className='mb-3'
					type={'text'}
					placeholder={'autor'}
					name={'autor'}
					value={nuevoAutor}
					onChange={gestorCambioAutor}
					id={'autor'}
				/>
				<br></br>
				<input
					className='mb-3'
					type={'text'}
					placeholder={'mensaje'}
					value={nuevoMensaje}
					onChange={gestorCambioMensaje}
					id={'mensaje'}
				/>
				<br></br>
				<input
					className='mb-3 '
					type={'date'}
					value={nuevaFecha}
					onChange={gestorCambioFecha}
					id={'fecha'}
				/>
				<br></br>
				<Button variant='primary' type={'submit'} value={'Finish'}>
					Añadir{' '}
				</Button>
			</form>
		</div>
	);
};

export default NuevoBlog;
