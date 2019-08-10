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
        <h1>User Data</h1>
        <p><b>Name:</b> {user.name ? user.name : 'Not found'}</p>
        <p><b>Age:</b> {user.age ? user.age : 'Not found'}</p>
        <p><b>Location:</b> {user.location ? user.location : 'Not Found'}</p>
    </div>
);


// React Render DOM
ReactDOM.render(templateTwo, appWraper);