import React from "react";
import '../Style/WordToGuess.scss'


const WordToGuess = props => (
	<div className="wordContainer">
		<ul className="wordToGuess"> 
			{ props.wordToGuess }
		</ul>
	</div>
	
);

export default WordToGuess;
