import React from "react";

import './Lives.scss'

export const Lives = props => (
	<div className="livesBoard w-100 p-1 text-right">
		<h1 className="lives mr-4 text-uppercase"> Lives: { props.numberOfLives } </h1>
	</div>
);

//export default Lives;