class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			title: 'IndecisionApp',
			subTitle: 'Put your life in a computer hands',
			options: props.options
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
		const numberRandom = Math.floor(Math.random() * this.state.options.length)
		alert(this.state.options[numberRandom]);
	}
	
	handleAddOption(option){
		if(!option) {
			return 'Insert some option'
		} else if ( this.state.options.indexOf(option) > -1) {
			return 'This option alredy exist'
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
				<Header subTitle={this.state.subTitle}/>
				<Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
				<Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
				<AddOption handleAddOption={this.handleAddOption}/>
			</div>
		)
	}
}
IndecisionApp.defaultProps = {
	options: []
}

class AddOption extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}

	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		e.target.elements.option.value = '';
		
		this.setState(() => { 
			return { error };
		});
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
};

const Action = (props) => {
	return (
		<button disabled={!props.hasOption} onClick={props.handlePick}>What should i do ?</button>
	)
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subTitle && <h2>{props.subTitle}</h2>}
		</div>
	)
};
Header.defaultProps = {
	title: 'Indecision'
}


const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleRemoveAll}>Remove All</button>
			<ol>
				{props.options.map(opt => <Option key={opt} option={opt} />)}
			</ol>
		</div>
	)
};

const Option = (props) => {
	return (
		<li>{props.option}</li>
	);
 };

// Render DOM
ReactDOM.render(<IndecisionApp options={['Canela']}/>, document.getElementById('app'));