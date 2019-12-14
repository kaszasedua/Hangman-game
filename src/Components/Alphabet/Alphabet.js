import React from "react";
import './Alphabet.scss'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Alphabet = props => (
		<ul className="alphabet" style={{ width: "650px" }}>
			{ alphabet.map( letter => (
				<li key={letter}
					className={ props.clickedLetters.includes( letter ) ? "disabled" : "letter" } 
					onClick={ () => props.onClick( letter ) }
				>
					{ letter }
				</li>
				))}
		</ul>
);

export default Alphabet;