/*Assign variables for start of game. We will need:
1. Win counter
2. Loss counter
3. User score counter
4. Random winning number, between 19-120
5. Random number for crystals A, B, C and D, between 1-12
6. Empty array for 4 crystals
*/

var winCounter = 0;
var lossCounter = 0;
var userScore = 0;
var winningNum = [];
var crystalA = [];
var crystalB = [];
var crystalC = [];
var crystalD = [];
var crystal = [4];

// Adding in audio element
var audio = new Audio("assets/win.mp3");

// Adding in button hover elements
$("button").hover(function(){
    $(this).css("background-color", "#fafb10");
    }, function(){
    $(this).css("background-color", "white");
 });

// And some fun link hover decoration
$("a").hover(function(){
    $(this).css("background-color", "#18c8e4");
     }, function(){
    $(this).css("background-color", "white");
 });

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
    winningNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("this is the winning number: " + winningNum);
    $("#winning-num").text(winningNum);
};

//Generate 4 random numbers for crystals
function pickCrystals() {
	for (var i=0; i < 4; i++) {
	crystal[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

// Store values of each crystal to the DOM using data()
	// $("#crystal-a").data(crystal[0]);
	// $("#crystal-b").data(crystal[1]);
	// $("#crystal-c").data(crystal[2]);
	// $("#crystal-d").data(crystal[3]);

// 	$("#crystal-a").click(function(){
//     $("user-score").data(crystal[0]);
// });
	// data("#button-d", crystal[3]);
	console.log("Here is stored value of crystal A " + crystal[0])

// Print numbers to console
    console.log("These are crystal numbers (left to right): " + crystal[0] + (" ") 
    	+ crystal[1] + (" ") + crystal[2] + (" ") + crystal[3] + (" "));
}

// Add a click function to each crystal and if/else statements
   

// Attach data to a <div> element, then retrieve the data:

// $("#btn1").click(function(){
//     $("div").data("greeting", "Hello World");
// });
// $("#btn2").click(function(){
//     alert($("div").data("greeting"));
// });



// $("button").click(function() {
// 	$("button").click(this) 
// 	$("#user-score").text(userScore += data("button"));
// 	if (userScore === winningNum) {
// 		winCounter++;
// 		$("#win-counter").text(winCounter);
// 		startGame();
// 		audio.play();
// 	} else if (userScore > winningNum) {
// 		lossCounter++;
// 		$("#loss-counter").text(lossCounter);
// 		startGame();
// 	}
// })


// $("#crystal-a").click(function() {
// 	$("#user-score").text(userScore += crystal[0]);
// 	if (userScore === winningNum) {
// 		winCounter++;
// 		$("#win-counter").text(winCounter);
// 		startGame();
// 		audio.play();
// 	} else if (userScore > winningNum) {
// 		lossCounter++;
// 		$("#loss-counter").text(lossCounter);
// 		startGame();
// 	}
// });
// $("#crystal-b").click(function() {
// 	$("#user-score").text(userScore += crystal[1]);
// 	if (userScore === winningNum) {
// 		winCounter++;
// 		$("#win-counter").text(winCounter);
// 		startGame();
// 		audio.play();
// 	} else if (userScore > winningNum) {
// 		lossCounter++;
// 		$("#loss-counter").text(lossCounter);
// 		startGame();
// 	}
// });

// $("#crystal-c").click(function() {
// 	$("#user-score").text(userScore += crystal[2]);
// 	if (userScore === winningNum) {
// 		winCounter++;
// 		$("#win-counter").text(winCounter);
// 		startGame();
// 		audio.play();
// 	} else if (userScore > winningNum) {
// 		lossCounter++;
// 		$("#loss-counter").text(lossCounter);
// 		startGame();
// 	}
// });

// $("#crystal-d").click(function() {
// 	$("#user-score").text(userScore += crystal[3]);
// 	if (userScore === winningNum) {
// 		winCounter++;
// 		$("#win-counter").text(winCounter);
// 		startGame();
// 		audio.play();
// 	} else if (userScore > winningNum) {
// 		lossCounter++;
// 		$("#loss-counter").text(lossCounter);
// 		startGame();
// 	}
// });

/* PLEASE READ: Worked to simplify this so no repeated code, but couldn't quite figure it out!
   This is as close as I got*/

// $("button").click(function() {
// 	for (var i = 0; i < 4; i++) {
// 	$("#user-score").text(userScore += crystal[i]);
// 	}
// 	if (userScore === winningNum) {
// 		winCounter++;
// 		$("#win-counter").text(winCounter);
// 		startGame();
// 		audio.play();
// 	} else if (userScore > winningNum) {
// 		lossCounter++;
// 		$("#loss-counter").text(lossCounter);
// 		startGame();
// 	}
// })


