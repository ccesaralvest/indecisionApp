class IndesicionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the computer hands';
        const options  = ['Thing One', 'Thing Two', 'Thing Four'];
       
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Options options={options} />
                <Action />
                <AddOption />
            </div>
        );
    }
};

class Action extends React.Component {
    handlePick(){
        alert('handlePick');
    }

    render(){
        return (
            <button onClick={this.handlePick}>What should i do ?</button>
        )
    }
};

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
};

class Options extends React.Component {
    handleRemoveAll(){
        alert('Remove');
    }

    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} option={option}  />)
                }
            </div>
        )
    }
};

class Option extends React.Component {
    render(){
        return <div>{this.props.option}</div>
    }
};

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        option && alert(option);
        e.target.elements.option.value = ''; 
    }

    render(){
        return (
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        );
    }
};


ReactDOM.render(<IndesicionApp />, document.getElementById('app'));