import React from 'react'

import Usuario from './Usuario'


const Usuarios = ({ userList, deleteUser }) => {

	const elemento = userList.map((usuario) => {
		return <Usuario key={usuario.id} usuario={usuario} deleteUser={deleteUser} />

	})

	return (
		<div>
			<h1>Usuarios Activos</h1>
			{elemento}
		</div>
	)
}

export default Usuarios
