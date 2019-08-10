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
var template = (
    <div>
        <h1>{app.title ? app.title : 'Title - Not found'}</h1>
        <h2>{app.subTitle ? app.subTitle : 'SubTitle - Not found'}</h2>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

// Person Data Object
var user = {
    name: 'Caio Timoteo',
    age: 28,
    location: 'Brazil'
};

// Template user
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'User Name - Not found'}</h1>
        <p>{user.age ? user.age : 'User Age - Not found'}</p>
    </div>
);


// React Render DOM
ReactDOM.render(template, appWraper);