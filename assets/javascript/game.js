$(window).load(function() {

//Global Variables
//----------------------------------------------------------------------------
//Arrays and Variables for holding data
var WinningNumber = Math.floor(Math.random()*(120-19+1)+19); //Random number between 19-120
var ScoreNumber = 0; //Added up GemValue clicks
var GemValue1 =; Math.floor(Math.random()*(12-1+1)+1);//Random number between 1-12
var GemValue2 =; Math.floor(Math.random()*(12-1+1)+1);//Random number between 1-12
var GemValue3 =; Math.floor(Math.random()*(12-1+1)+1);//Random number between 1-12
var GemValue4 =; Math.floor(Math.random()*(12-1+1)+1);//Random number between 1-12
var Wins = 0;	 //How many times you were able to match ScoreNumber to WinningNumber exactly
var Losses = 0;  //How many times you let ScoreNumber exceed the value of WinningNumber

//Functions
//----------------------------------------------------------------------------

function RoundStart() {
	//Round Reset
	ScoreNumber = 0;
	WinningNumber = Math.floor(Math.random()*(120-19+1)+19);
	GemValue1 =; Math.floor(Math.random()*(12-1+1)+1);
	GemValue2 =; Math.floor(Math.random()*(12-1+1)+1);
	GemValue3 =; Math.floor(Math.random()*(12-1+1)+1);
	GemValue4 =; Math.floor(Math.random()*(12-1+1)+1);
}

function Gem1Add() {
	ScoreNumber = ScoreNumber + GemValue1;
	//Update Score Being Shown
}

function Gem2Add() {
	ScoreNumber = ScoreNumber + GemValue2;
	//Update Score Being Shown
}

function Gem3Add() {
	ScoreNumber = ScoreNumber + GemValue3;
	//Update Score Being Shown
}

function Gem4Add() {
	ScoreNumber = ScoreNumber + GemValue4;
	//Update Score Being Shown
}





//Main Process
//----------------------------------------------------------------------------
RoundStart();

console.log(GemValue1);

$("#Gem1").on("click", Gem1Add()

});