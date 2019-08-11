console.log("FIRST JSX");
// JSX
// Get Wraper Container
const appWraper = document.getElementById('app');

// App Data Object
const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

// First Template App
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

// Person Data Object
const user = {
    name: 'Caio Timoteo',
    age: 18,
    location: 'Brazil'
};

// Template user
const templateTwo = (
    <div>
        <h1>User Data</h1>
        <p><b>Name:</b> {user.name ? user.name : 'Not found'}</p>
        {(user.age && user.age >= 18) && <p><b>Age:</b> {user.age} </p>}
        <p><b>Location:</b> {user.location ? user.location : 'Not Found'}</p>
    </div>
);

// React Render DOM
ReactDOM.render(template, appWraper);