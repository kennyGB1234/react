const Listado = (Datos) => {
	const listaUsuarios = Datos.Datos;
	return (
		<div className='listado'>
			<h1>Lista de Modelos</h1>
			<ul>
				{listaUsuarios.map((elemento) => {
					
					return (
						<div className='c'>
							<hr />
							<h3>{elemento.nombre}</h3>
							<h3>{elemento.sexo}</h3>
							<h3>{elemento.edad}</h3>
							<h3>{elemento.nacionalidad}</h3>
							
						</div>
					);
				
				})}
			</ul>
		</div>
	);
};

export default Listado;
