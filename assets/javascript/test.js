/*Assign variables for start of game. We will need:
1. Win counter
2. Loss counter
3. User score counter
4. Random winning number, between 19-120
5. Random number for crystals A, B, C and D, between 1-12
6. Empty array for all crystals
*/

var winCounter = 0;
var lossCounter = 0;
var userScore = 0;
var winningNum = [];
var crystalA = [];
var crystalB = [];
var crystalC = [];
var crystalD = [];
// var crystals = ["crystalA", "crystalB", "crystalC", "crystalD"];
var randomNums = "";
var list = [4];

// Start game function
function startGame () {
pickWinningNum();
pickCrystals();
userScore = 0;
// play();
$("#user-score").text(userScore);
}

startGame ();

//Generate random winning number as function
function pickWinningNum() {
    winningNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("this is the winning number: " + winningNum);
    $("#winning-num").text(winningNum);
};

function pickCrystals() {

for (var i=0; i < 4; i++) {
list[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

// console.log(list);
    console.log("These are crystal numbers (left to right): " + list[0] + (" ") 
    	+ list[1] + (" ") + list[2] + (" ") + list[3] + (" "));
}

var audio = new Audio("assets/javascript/win.mp3");


$("#crystal-a").click(function() {
	$("#user-score").text(userScore += list[0]);
	if (userScore === winningNum) {
		winCounter++;
		$("#win-counter").text(winCounter);
		startGame();
		audio.play();
	} else if (userScore > winningNum) {
		lossCounter++;
		$("#loss-counter").text(lossCounter);
		startGame();
	}
});

$("#crystal-b").click(function() {
	$("#user-score").text(userScore += list[1]);
});

$("button").hover(function(){
    $(this).css("background-color", "#fafb10");
    }, function(){
    $(this).css("background-color", "white");
 });


