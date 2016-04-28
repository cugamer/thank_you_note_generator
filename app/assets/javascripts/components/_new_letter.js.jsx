var NewLetter = React.createClass({
	createLetterSubmit() {
		var applicant_name = this.refs.applicant_name.value;
		var date = this.refs.date.value;
		var job = this.refs.job.value;
		var quality = this.refs.quality.value;
		var salutation = this.refs.salutation.value;
		var interviewer_name = this.refs.interviewer_name.value;

		$.ajax({
            url: '/api/v1/letters',
            type: 'POST',
            data: { letter: {applicant_name: applicant_name}},
            success: (response) => {
            	console.log(response);
       		}
		});
	},
	render() {
		return(
			<div>
				<input ref='applicant_name' placeholder='Enter the appplicants name' />
				<input ref='date' placeholder='Enter the interview date' />
				<input ref='job' placeholder='Enter job title' />
				<input ref='quality' placeholder='Enter something that makes you awesome' />
				<input ref='salutation' placeholder='Enter a salutation' />
				<input ref='interviewer_name' placeholder='Enter the interviewers name' />

				<button onClick={this.createLetterSubmit}>Create Letter</button>
			</div>
		)
	}
});