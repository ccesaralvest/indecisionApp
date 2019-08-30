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
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
	}
	componentDidMount(){
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(()=>({options}));
			}	
		} catch(e) {
			console.log(e);
		}
	}
	componentDidUpdate(prevProp, prevState){
		if ( prevState.options.length !== this.state.options.length ) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json)
		}
	}
	handleRemoveAll(){
		this.setState(() => ({options:[]}));
	}
	handleDeleteOption(optionToRemove){
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		})); 
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
		this.setState((prevState) => ({options: prevState.options.concat([option])}))
	}
	render(){
		return (
			<div>	
				<Header subTitle={this.state.subTitle}/>
				<Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
				<Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
				<AddOption handleAddOption={this.handleAddOption}/>
			</div>
		)
	}
};

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
		
		this.setState(() => ({error}));
		
		if(!error) { 
			e.target.elements.option.value = '';
		}
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
				{props.options.length === 0 && <p>Please, insert a option</p>}
				{props.options.map(opt => (
					<Option key={opt} option={opt} handleDeleteOption={props.handleDeleteOption} />
				))}
			</ol>
		</div>
	)
};

const Option = (props) => {
	return (
		<li>{props.option}
			<button 
				onClick={(e) => {
					props.handleDeleteOption(props.option);
				}}
			>
				Remove
			</button>
		</li>
	);
 };

// Render DOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));