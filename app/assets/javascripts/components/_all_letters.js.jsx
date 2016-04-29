var AllLetters = React.createClass({
	render() {
		letterData = this.props.letter;
		console.log(letterData)
		var letterMaker = function(letter){

			return(
				<div id={letter.id}>
					<h3>Letter items</h3>
					{letter.letter}
				</div>
			)
		};
		if(letterData.length != 0){
			return(
				<div>
					<h3>Your letter has been sent:</h3>
					<p>{letterData.letterGreeting}</p>
					<p>{letterData.letterBody}</p>
					<p>{letterData.letterSalutation}</p>
					<p>{letterData.letterName}</p>
				</div>
			)
		}else{
			return(<div></div>)
		}
	}
});