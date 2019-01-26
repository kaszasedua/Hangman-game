import React from "react";

import Lives from './Lives'
import '../Style/HomePage.scss'

const HomePage = props => (
	<div id="homeBackground">
		<div id="homeContainer">
			<h1 className="gameTitle"> HANGMAN </h1>
			<button className="play" onClick={ props.playButtonClicked } > PLAY </button>
		</div>
	</div>
);

export default HomePage;