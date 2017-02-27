/*Assign variables for start of game. We will need:
1. Win counter
2. Loss counter
3. User score counter
4. Random winning number, between 19-120
5. Random number for crystals 1-4, between 1-12
6. Total score (adds all user scores together) PUT THIS ON ICE

Write all of the above to HTML
*/

var winCounter = 0;
var lossCounter = 0;
var userScore = 0;
var winningNum = [];
var crystalA = [];
var crystalB = [];
var crystalC = [];
var crystalD = [];

// Start game function
function startGame () {
pickWinningNum();
pickCrystals();
userScore = 0;
document.getElementById("user-score").innerHTML = userScore;
}

startGame ();

//Generate random winning number as function
function pickWinningNum() {
    winningNum = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    console.log("this is the winning number: " + winningNum);
    document.getElementById("winning-num").innerHTML = winningNum;
};

// Generate random numbers for each of four crystals
function pickCrystals() {
    crystalA = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystalB = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystalC = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystalD = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;

    console.log("These are crystal numbers (left to right): " + [crystalA] + (" ") 
    	+ [crystalB] + (" ") + [crystalC] + (" ") + [crystalD] + (" "));
};

// Write click functions for each crystal and print score
$("#crystal-a").click(function() {
	document.getElementById("user-score").innerHTML = userScore += crystalA;
	if (userScore === winningNum) {
		winCounter++;
		document.getElementById("win-counter").innerHTML = winCounter;
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		document.getElementById("loss-counter").innerHTML = lossCounter;
		startGame();
	}
});

$("#crystal-b").click(function() {
	document.getElementById("user-score").innerHTML = userScore += crystalB;
	if (userScore === winningNum) {
		winCounter++;
		document.getElementById("win-counter").innerHTML = winCounter;
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		document.getElementById("loss-counter").innerHTML = lossCounter;
		startGame();
	}
});

$("#crystal-c").click(function() {
	document.getElementById("user-score").innerHTML = userScore += crystalC;
	if (userScore === winningNum) {
		winCounter++;
		document.getElementById("win-counter").innerHTML = winCounter;
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		document.getElementById("loss-counter").innerHTML = lossCounter;
		startGame();
	}
});

$("#crystal-d").click(function() {
	document.getElementById("user-score").innerHTML = userScore += crystalD;
	if (userScore === winningNum) {
		winCounter++;
		document.getElementById("win-counter").innerHTML = winCounter;
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		document.getElementById("loss-counter").innerHTML = lossCounter;
		startGame();
	}
});

