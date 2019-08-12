'use strict';

console.log("FIRST JSX");
// JSX
// Get Wraper Container
var appWraper = document.getElementById('app');

// App Data Object
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

// First Template App
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
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

// fazer um contador
var count = 0;
var addOne = function addOne() {
    count++;
    renderCountApp();
};
var minusOne = function minusOne() {
    count > 0 && count--;
    renderCountApp();
};
var reset = function reset() {
    count = 0;

    renderCountApp();
};

var renderCountApp = function renderCountApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appWraper);
};
renderCountApp();
