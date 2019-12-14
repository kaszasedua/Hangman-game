import React from "react";

import './YouWon.scss';

const winText = "Congrats! You're not as bad as I though you were."

const YouWon = props => (
	<div>
		<div id="winBackground"></div>
			<div id="winContainer" className="winContainer">
		          <h3 id="winText" className="winText"> { winText } </h3>
		            <button className="newGame" onClick = { props.resetGame } >
		              Restart
		            </button>
		    </div>
	</div>
);

export default YouWon;


