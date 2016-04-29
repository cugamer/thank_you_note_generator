var AllLetters = React.createClass({
	render() {
		letterData = this.props.letter;
		console.log(letterData)
		var letterMaker = function(letter){
			return(
				<div key={letter.id}>
					<h3>Letter items</h3>
					<ul>
						<li>{letter.applicant_name}</li>
						<li>{letter.date}</li>
					</ul>
				</div>
			)
		};
		if(letterData.length != 0){
			markedUpLetterData = letterMaker(letterData);
			return(
				<div>
					{markedUpLetterData}
				</div>
			)
		}else{
			return(<div></div>)
		}
	}
});