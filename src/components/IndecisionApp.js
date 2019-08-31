import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
	state = {
		title: 'IndecisionApp',
		subTitle: 'Put your life in a computer hands',
		options: []
    }

    handleRemoveAll = () => {this.setState(() => ({options:[]}));}
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		})); 
	}
	handlePick = () => {
		const numberRandom = Math.floor(Math.random() * this.state.options.length)
		alert(this.state.options[numberRandom]);
	}
	handleAddOption = (option) => {
		if(!option) {
			return 'Insert some option'
		} else if ( this.state.options.indexOf(option) > -1) {
			return 'This option alredy exist'
		}
		this.setState((prevState) => ({options: prevState.options.concat([option])}))
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