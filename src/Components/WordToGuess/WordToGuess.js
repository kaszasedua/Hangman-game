import React from "react";
import './WordToGuess.scss'


export const WordToGuess = props => (
	<div className="wordContainer">
		<ul className="wordToGuess"> 
			{ props.wordToGuess }
		</ul>
	</div>
	
);

//export default WordToGuess;
