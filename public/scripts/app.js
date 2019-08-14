'use strict';

console.log("FIRST JSX");
// JSX
// Get Wraper Container
var appWraper = document.getElementById('app');

// App Data Object
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    // insert new option in obj app 
    option && app.options.push(option);
    // Reset input 
    e.target.elements.option.value = '';
    render();
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

// First Template App
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'texto', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appWraper);
};
render();
