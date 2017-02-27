/*Assign variables for start of game. We will need:
1. Win counter
2. Loss counter
3. Total score counter
4. Random winning number, between 19-120
5. Random number for crystals 1-4, between 1-12

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


// Start game
pickWinningNum();
pickCrystals();

// Write click functions for each crystal
$("img").click(function() {
	alert("You clicked a crystal!");
	if (crystalA) {
		userScore = [crystalA]};
	if (crystalB) {
		userScore = [crystalB]};
	document.getElementById("user-score").innerHTML = userScore;
});

//We can increment up by any value by writing i += x, 
//where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.

// what is +=???
// It is a Javascript assignment operator
// Operator: +=
// Example: x += y	
// Same as: x = x + y