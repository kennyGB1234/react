const Listado = (zapatos) => {
	const listaUsuarios = zapatos.zapatos;
	return (
		<div className='listado'>
			<h1>Lista de Modelos</h1>
			<ul>
				{listaUsuarios.map((elemento) => {
					// === Primera opción ===
					return (
						<div className='card-dos all-center'>
							<h2>{elemento.marca}</h2>
							<h4>{elemento.modelo}</h4>
							<h4>{elemento.precio}</h4>
						</div>
					);
					// === Otra opción ===
					// return <ElementoLista key={elemento.id} element={elemento.nombre} />;
				})}
			</ul>
		</div>
	);
};

export default Listado;
