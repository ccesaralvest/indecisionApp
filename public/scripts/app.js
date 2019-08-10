'use strict';

console.log("FIRST JSX");
// JSX
// Get Wraper Container
var appWraper = document.getElementById('app');

// App Data Object
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
};

// First Template App
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title ? app.title : 'Title - Not found'
    ),
    React.createElement(
        'h2',
        null,
        app.subTitle ? app.subTitle : 'SubTitle - Not found'
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
    age: 28,
    location: 'Brazil'
};

// Template user
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'User Name - Not found'
    ),
    React.createElement(
        'p',
        null,
        user.age ? user.age : 'User Age - Not found'
    )
);

// React Render DOM
ReactDOM.render(template, appWraper);
