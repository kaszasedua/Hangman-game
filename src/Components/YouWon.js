import React from "react";

import '../Style/YouWon.scss';

const winText = "Congrats! You're not as bad as I though you were."

const YouWon = props => (
	<div id="winBackground">
			<div id="winContainer" className="winContainer">
		          <h3 id="winText" className="winText"> { winText } </h3>
		            <button className="newGame" onClick = { props.resetGame } >
		              New Game
		            </button>
		    </div>
	</div>
);

export default YouWon;


