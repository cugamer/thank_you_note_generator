var NewLetter = React.createClass({
	render() {
		return(
			<div>
				<input ref='applicant_name' placeholder='Enter the appplicants name' />
				<input ref='date' placeholder='Enter the interview date' />
				<button>Create Letter</button>
			</div>
		)
	}
});