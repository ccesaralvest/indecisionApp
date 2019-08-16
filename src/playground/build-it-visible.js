let visibilidade = false;

const mudaEstado = () => {
	visibilidade = !visibilidade;
	render();
};

const render = () => {
	const jsx = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={mudaEstado}>{ visibilidade ? 'Hide' : 'Show'}</button>
			{visibilidade && <p>Detalhes</p>}
		</div>
	);
	ReactDOM.render(jsx, document.getElementById('app'));
};

render();