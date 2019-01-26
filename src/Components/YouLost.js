import React from "react";

import '../Style/YouLost.scss'

const loseText = "You have failed miserably. Would you like to start again?"

const YouLost = props => (
	<div id="loseBackground">
		<div id="loseContainer" className="loseContainer">
	          <h3 id="loseText" className="loseText"> { loseText } </h3>
	            <button className="restart" onClick={ props.resetGame} >
	              Restart
	            </button>
	    </div>
	</div>
);

export default YouLost;