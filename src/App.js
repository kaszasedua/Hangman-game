import React, { Component } from 'react';

import './App.scss';

import Title from './Components/Title'
import Lives from './Components/Lives'
import Alphabet from './Components/Alphabet';
import WordToGuess from './Components/WordToGuess';
import YouWon from './Components/YouWon';
import YouLost from './Components/YouLost';
import HomePage from './Components/HomePage';
import Hangman from './Components/Hangman';
import Hint from './Components/Hint';

import Home from './img/home2.png';

import img1 from './img/10.png';
import img2 from './img/11.png';
import img3 from './img/12.png';
import img4 from './img/13.png';
import img5 from './img/14.png';
import img6 from './img/15.png';
import img7 from './img/16.png';
import img8 from './img/17.png';
import img9 from './img/18.png';
import img10 from './img/19.png';


const letters = document.getElementsByClassName('letter')
const categoriesAndWords = { 
	"countries": [ 'hungary', 'netherlands', 'spain'], 
	"fruit": [ 'apple', 'banana', 'orange'], 
	"colours": [ 'black', 'white', 'blue' ] 
}

const initialState = {
	currentWord: { label: [], actualWord: [] },
	clickedLetters : [],
	words: null,
	letters: letters,
	matchedLetters: null,
	lives: 9,
	gameMode: 'medium',
	hint: null,
	currentImage: 1,
	onHomePage: true
}

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = initialState

		this.letterDoesMatch = this.letterDoesMatch.bind(this)
		this.registerMove = this.registerMove.bind(this)
		this.letterAlreadyClicked = this.letterAlreadyClicked.bind(this)
		this.makeLetterVisible = this.makeLetterVisible.bind(this)
		this.getLabel = this.getLabel.bind(this)
		this.gameIsLost = this.gameIsLost.bind(this)
		this.gameIsWon = this.gameIsWon.bind(this)
		this.resetGame = this.resetGame.bind(this)
		this.goBackToHome = this.goBackToHome.bind(this)
		this.playButtonClicked = this.playButtonClicked.bind(this)
		this.mediumLevel = this.mediumLevel.bind(this)
		this.hangmanSprites = this.hangmanSprites.bind(this)

	}

	componentDidMount(){
		this.getCategory( this.getWord )
	}

	getCategory( callback ) {
		const { words, currentWord } = this.state

		const categories = Object.keys( categoriesAndWords )
		const hintToCategory = categories[Math.floor( Math.random() * categories.length )]
		console.log( hintToCategory )
		this.setState( prevState => ({
			hint: hintToCategory
		}), callback )
	}

	getWord( ) {
		const { words, currentWord, hint } = this.state

		const allWords = categoriesAndWords[hint]
		console.log( hint )
		
		const randomWord = allWords[Math.floor( Math.random() * allWords.length )]
		const splitRandomWord = randomWord.split('')
		const label = splitRandomWord.map( item => ({ letter: item, isVisible: false })  )

		console.log( splitRandomWord )

		this.setState( prevState => ({
			words: allWords,
			currentWord: { ...prevState.currentWord, label, actualWord: splitRandomWord } 
		}))
	};

	registerMove( letter ) {
		const { currentWord, lives } = this.state
		const clickedLetters = this.state.clickedLetters

		if ( this.letterAlreadyClicked( letter ) ) return;

		this.setState( prevState => ( {
			clickedLetters : prevState.clickedLetters.concat( [ letter ] )
		} ) )

		if ( this.letterDoesMatch( letter ) ) {
			this.makeLetterVisible( letter )

		} else if ( lives > 0 ) {
			this.setState( prevState => ({
				lives: this.state.lives - 1
			}))
		}

		console.log( letter )
	}

	letterAlreadyClicked( letter ) {
		const { clickedLetters } = this.state

		if ( clickedLetters.includes( letter ) ) {
			console.log( "letter clicked" )

			return true
		}
	}

	makeLetterVisible( letter ) {
		const { currentWord } = this.state
		const newLabel = currentWord.label.map( x => {
			if ( x.letter == letter ) {
				x.isVisible = true 				
			} 

			return x
		})

		this.setState(prevState => ({
			currentWord: {...prevState.currentWord, label: newLabel }
		}))
	}

	letterDoesMatch( letter ) {
		const { currentWord, matchedLetters } = this.state
		const doesMatch = currentWord.actualWord.includes( letter )

		return doesMatch
	}

	getLabel() {
		const { currentWord } = this.state

		const label = this.state.currentWord.label.map( x => {
			if ( !x.isVisible ) {
				return "_"
			}
			return x.letter
		} )

		return label.join("")
	}

	playButtonClicked(e) {
		const { onHomePage } = this.state

		this.setState( prevState => ({
			onHomePage: false
		}))
	}

	gameIsWon() {
		const { currentWord } = this.state
		const label = currentWord.label.filter( x => x.isVisible )

		if ( currentWord.actualWord.length == label.length && label.length > 0 ) {
			return true
		}	
	} 

	gameIsLost() {
		const { lives, isGameLost } = this.state

		if ( lives == 0 ) {
			return true
		}
	}

	resetGame() {
		this.setState( prevState => ({
			lives: 9,
			onHomePage: false,
			clickedLetters : []
		}))

		this.getWord()
	}

	goBackToHome() {
		this.setState( prevState => ({
			lives: 9,
			onHomePage: true,
			clickedLetters : []
		}))
		
		this.getWord()
	}

	mediumLevel() {
		const { currentImage } = this.state

		this.setState( prevState => ({
			lives: 5,
			gameMode: "medium"
		}))
	}	

	hangmanSprites() {
		const { gameMode, lives } = this.state

		const numberOfLives = { 
		  	"medium": {
		  		9: img1,
				8: img2,
				7: img3,
				6: img4,
		  		5: img5, 
		  		4: img6,
		  		3: img7, 
		  		2: img8,
		  		1: img9,
		  		0: img10
		  	}
		}

		const  myImage = numberOfLives[gameMode][lives]

		return <img className="hangmanSprite" src={ myImage } />
	}

	render() {
	    const { isGameWon, isGameLost, onHomePage, lives, currentImage, hint } = this.state
	    
	    return (
	    	<div>
	    		{ onHomePage ? <HomePage playButtonClicked={ () =>  this.playButtonClicked() } 
	    						/> : <img className="home" src={ Home } onClick={ this.goBackToHome } /> }
	     		{ this.gameIsWon() ? <YouWon resetGame={ this.resetGame }/> : null }
	     		{ this.gameIsLost() ? <YouLost resetGame={ this.resetGame } /> : null }
	    		<Lives numberOfLives={ lives } />
	    		<Hint giveHint= { hint } />
	      		<WordToGuess wordToGuess={ this.getLabel() } />
	     		<Hangman hangmanSprites={ this.hangmanSprites() }/>
	     		<Alphabet onClick={ this.registerMove } clickedLetters={ this.state.clickedLetters } />
	      	</div>
	    )
	}
}

export default App;