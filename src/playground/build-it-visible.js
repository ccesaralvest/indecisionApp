class VisibilityToogle extends React.Component {
	constructor(props){
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

		this.state = {
			visibility: false
		};
	}
	handleToggleVisibility(){
		this.setState((prevState)=>{
			return {
				visibility: !prevState.visibility
			}
		})
	}
	render(){
		return (
			<div>
				<h1>Make it Visible</h1>		

				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide' : 'Show'}
				</button>

				{this.state.visibility && <p>Some text</p>}
			</div>			
		)
	}
}
ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));