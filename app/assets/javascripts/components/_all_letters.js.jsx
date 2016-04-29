var AllLetters = React.createClass({
	render() {
		letterData = this.props.letter;
		console.log(letterData)
		var letterMaker = function(letter){
			return(
				<div>
					<h3>Letter items</h3>
					<p>{letter}</p>
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