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


// fazer um contador
let count = 0;
const addOne = () => {
    count++;
    renderCountApp();
};
const minusOne = () => {
    count > 0 && count--;
    renderCountApp();
};
const reset = () => {
    count = 0;

    renderCountApp();
};

const renderCountApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appWraper);
};
renderCountApp();