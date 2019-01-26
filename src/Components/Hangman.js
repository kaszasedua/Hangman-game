import React from "react";

import '../Style/Hangman.scss'

const Hangman = props => (
	<div className="hangmanContainer">
		<div className="hangman"> { props.hangmanSprites } </div>
	</div>
); 

export default Hangman;