console.log("FIRST JSX");
// JSX
// Get Wraper Container
const appWraper = document.getElementById('app');

// App Data Object
const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    // insert new option in obj app 
    option && app.options.push(option);
    // Reset input 
    e.target.elements.option.value = '';
    render();
};
const onRemoveAll = () => {
    app.options = [];
    render();
};
const onMakeDecision = () => {
    const number = Math.floor(Math.random() * app.options.length);
    alert(app.options[number]);
};

// First Template App
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <button onClick={onMakeDecision}>Make a Decision</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='texto' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appWraper);
}
render();