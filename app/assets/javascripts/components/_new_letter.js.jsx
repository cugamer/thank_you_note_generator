var NewLetter = React.createClass({
	createLetterSubmit() {
		var applicant_name = this.refs.applicant_name.value;
		var date = this.refs.date.value;

		console.log(applicant_name + " -- " + date);
	},
	render() {
		return(
			<div>
				<input ref='applicant_name' placeholder='Enter the appplicants name' />
				<input ref='date' placeholder='Enter the interview date' />
				<button onClick={this.createLetterSubmit}>Create Letter</button>
			</div>
		)
	}
});