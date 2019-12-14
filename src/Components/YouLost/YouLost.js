import React from "react";

import './YouLost.scss'

const loseText = "You have failed miserably. Would you like to start again?"

const YouLost = props => (
	<div>
		<div id="loseBackground"></div>
			<div id="loseContainer" className="loseContainer">
		          <h3 id="loseText" className="loseText"> { loseText } </h3>
		            <button className="restart" onClick={ props.resetGame} >
		              Restart
		            </button>
		    </div>
	</div>
);

export default YouLost;