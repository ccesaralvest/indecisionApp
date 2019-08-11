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

// Person Data Object
var user = {
    name: 'Caio Timoteo',
    age: 18,
    location: 'Brazil'
};

// Template user
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'User Data'
    ),
    React.createElement(
        'p',
        null,
        React.createElement(
            'b',
            null,
            'Name:'
        ),
        ' ',
        user.name ? user.name : 'Not found'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        React.createElement(
            'b',
            null,
            'Age:'
        ),
        ' ',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        React.createElement(
            'b',
            null,
            'Location:'
        ),
        ' ',
        user.location ? user.location : 'Not Found'
    )
);

// React Render DOM
ReactDOM.render(template, appWraper);
