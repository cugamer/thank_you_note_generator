var LetterBody = React.createClass({
	getInitialState(){
		return { letters: [] };
	},
	componentDidMount() {
		$.getJSON('/api/v1/letters', (response) => { this.setState({ letters: response}) });
	},
	handleSubmit(response) {
		var newState = this.state.letters.concat(response);
		this.setState({letters: newState})
	},
	render(){
		return (
			<div>
				<NewLetter handleSubmit={this.handleSubmit} />
				<AllLetters letters={this.state.letters} />
			</div>
		)
	}
});