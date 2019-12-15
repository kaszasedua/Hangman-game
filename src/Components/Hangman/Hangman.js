import React from "react";

import './Hangman.scss'

export const Hangman = props => (
	<div className="hangmanContainer">
		<div className="hangman"> { props.hangmanSprites } </div>
	</div>
); 

//export default Hangman;