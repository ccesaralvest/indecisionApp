'use strict';

var appWrapper = document.getElementById('app');

var buildVisible = {
	title: 'Visibility Toggle',
	contentText: ''
};
var hideDetails = function hideDetails() {
	buildVisible.contentText = '';
	renderBuildVisible();
};
var showDetails = function showDetails() {
	buildVisible.contentText = 'Some Details';
	renderBuildVisible();
};

var renderBuildVisible = function renderBuildVisible() {
	var templatebuild = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			buildVisible.title
		),
		buildVisible.contentText ? React.createElement(
			'button',
			{ onClick: hideDetails },
			'Hide details'
		) : React.createElement(
			'button',
			{ onClick: showDetails },
			'Show Details'
		),
		buildVisible.contentText && React.createElement(
			'p',
			null,
			buildVisible.contentText
		)
	);
	ReactDOM.render(templatebuild, appWrapper);
};

renderBuildVisible();
