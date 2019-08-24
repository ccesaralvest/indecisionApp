class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			title: 'IndecisionApp',
			subTitle: 'Put your life in a computer hands',
			options: []
		}
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	handleRemoveAll(){
		this.setState(() => {
			return {
				options: []
			}
		})
	}

	handlePick(){
		const numberRandom = Math.floor(Math.random() * this.state.options.length);
		alert(this.state.options[numberRandom]);
	}
	
	handleAddOption(option){
		if(!option) {
			return 'Theres no Option'
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exist'
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option])
			}
		})
	}

	render(){
		return (
			<div>
				<Header title={this.state.title} subTitle={this.state.subTitle}/>
				<Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
				<Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
				<AddOption handleAddOption={this.handleAddOption}/>
			</div>
		)
	}
}

class AddOption extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		e.target.elements.option.value = '';

		const error = this.props.handleAddOption(option);
		this.setState(() => {
			return { error };
		})
	}
	render(){
		return(
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option'/>
					<button>Add Option</button>
				</form>
			</div>
		)
	}
}

class Action extends React.Component {
	render(){
		return (
			<button disabled={!this.props.hasOption} onClick={this.props.handlePick}>What should i do ?</button>
		)
	}
}

class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subTitle}</h2>
			</div>
		)
	}
}

class Options extends React.Component {
	render(){
		return (
			<div>
				<button onClick={this.props.handleRemoveAll}>Remove All</button>
				<ol>
					{this.props.options.map(opt => <Option key={opt} option={opt} />)}
				</ol>
			</div>
		)
	}
}

class Option extends React.Component {
	render(){
		return (
			<li>{this.props.option}</li>
		);
	}
}

// Render DOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));