import React from "react";

import './Hint.scss'

export const Hint = props => (
	<div className="hintContainer">
		<h1 className="hint"> { props.giveHint } </h1>
	</div>
);

//export default Hint;