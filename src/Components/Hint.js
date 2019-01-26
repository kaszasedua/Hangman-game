import React from "react";

import '../Style/Hint.scss'

const Hint = props => (
	<div className="hintContainer">
		<h1 className="hint"> { props.giveHint } </h1>
	</div>
);

export default Hint;