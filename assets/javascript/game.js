/*Assign variables for start of game. We will need:
1. Win counter
2. Loss counter
3. User score counter
4. Random winning number, between 19-120
5. Random number for crystals A, B, C and D, between 1-12
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
$("#user-score").text(userScore);
}

startGame ();

//Generate random winning number as function
function pickWinningNum() {
    winningNum = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    console.log("this is the winning number: " + winningNum);
    $("#winning-num").text(winningNum);
};

// Trying to heed Ethan's advice and simplify this code 
// Generate random numbers for each of four crystals
//    function pickCrystals() {
//    	var abcd = [crystalA, crystalB, crystalC, crystalD];
//    abcd = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
// console.log("These are crystal numbers (left to right): " + [crystalA] + (" ") 
//     	+ [crystalB] + (" ") + [crystalC] + (" ") + [crystalD] + (" "));
// };

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
	$("#user-score").text(userScore += crystalA);
	if (userScore === winningNum) {
		winCounter++;
		$("#win-counter").text(winCounter);
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		$("#loss-counter").text(lossCounter);
		startGame();
	}
});

$("#crystal-b").click(function() {
	$("#user-score").text(userScore += crystalB);
	if (userScore === winningNum) {
		winCounter++;
		$("#win-counter").text(winCounter);
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		$("#loss-counter").text(lossCounter);
		startGame();
	}
});

$("#crystal-c").click(function() {
	$("#user-score").text(userScore += crystalC);
	if (userScore === winningNum) {
		winCounter++;
		$("#win-counter").text(winCounter);
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		$("#loss-counter").text(lossCounter);
		startGame();
	}
});

$("#crystal-d").click(function() {
	$("#user-score").text(userScore += crystalD);
	if (userScore === winningNum) {
		winCounter++;
		$("#win-counter").text(winCounter);
		startGame();
	} else if (userScore > winningNum) {
		lossCounter++;
		$("#loss-counter").text(lossCounter);
		startGame();
	}
});

