var AllLetters = React.createClass({
	render() {
		var letters = this.props.letters.map((letter) => {
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