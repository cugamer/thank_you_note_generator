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
            data: { letter: {applicant_name: applicant_name,
            				date: date,
            				job: job,
            				quality: quality,
            				salutation: salutation,
            				interviewer_name: interviewer_name
            			}},
            success: (response) => {
            	this.props.handleSubmit(response);
       		}
		});
	},
	render() {
		return(
			<div>
				<p class="form-input"><input ref='applicant_name' placeholder='Your Name' /> - Enter your name</p>
				<p class="form-input"><input ref='date' placeholder='Interview Date' /> - Enter the date of your interview</p>
				<p class="form-input"><input ref='job' placeholder='Job Title' /> - Enter the job title you interviewed for</p>
				<p class="form-input"><input ref='quality' placeholder='Awesome' /> - Enter something about yourself that makes you awesome</p>
				<p class="form-input"><input ref='salutation' placeholder='Salutation' /> - Enter your prefered salutation</p>
				<p class="form-input"><input ref='interviewer_name' placeholder='Interviewers Name' /> - Enter the interviewers name</p>
				
				<button onClick={this.createLetterSubmit}>Create Letter</button>
			</div>
		)
	}
});