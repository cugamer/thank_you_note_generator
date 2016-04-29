var LetterBody = React.createClass({
	getInitialState(){
		return { letter: [] };
	},
	handleSubmit(response) {
		var newState = response;
		this.setState({letter: newState});
	},
	render(){
		return (
			<div>
				<NewLetter handleSubmit={this.handleSubmit} />
				<AllLetters letter={this.state.letter} />
			</div>
		)
	}
});