'use strict';

var visibilidade = false;

var mudaEstado = function mudaEstado() {
	visibilidade = !visibilidade;
	render();
};

var render = function render() {
	var jsx = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: mudaEstado },
			visibilidade ? 'Hide' : 'Show'
		),
		visibilidade && React.createElement(
			'p',
			null,
			'Detalhes'
		)
	);
	ReactDOM.render(jsx, document.getElementById('app'));
};

render();
