var AllLetters = React.createClass({
	componentDidMount() {
		console.log("Component mounted");
		$.getJSON('/api/letters/letters', (response) => { this.setState({ items: response}) });
	},
	getInitialState(){
		return { items: [] };
	},
	render() {
		var letters = this.state.items.map((letter) => {
			return(
				<div key={letter.id}>
					<h3>Letter items</h3>
					<ul>
						<li>{letter.applicant_name}</li>
						<li>{letter.date}</li>
					</ul>
				</div>
			)
		});

		return(
			<div>
				{letters}
			</div>
		)
	}
});