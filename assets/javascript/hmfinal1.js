// Declare variables

var keywords = ['skywalker', 'yoda', 'anakin', 'vader', 'stormtrooper']

// Generate random keyword

var randomKeyword = Math.floor((Math.random() * (keywords.length)));

// Keyword selector

var wordChoice = keywords[randomKeyword];

// New array

var alpha = new Array(wordChoice.length);

// Start

var start = true;

// Bravo value
var bravo = 0;


// Keywords to underscores
for (var i = 0; i < alpha.length; i++) {
	alpha[i] = "_ ";
};

// Start the game
document.onkeyup = function() {
	if (start == true) {
		document.getElementById("begin").innerHTML = "Let's Begin!";
	};
};

// Show and print correct guesses

var showAlpha = function() {
	for (var i = 0; i < alpha.length; i++) {
		var charlie = document.getElementById("charlie");
		var delta = document.createTextNode(alpha[i]);
		charlie.appendChild(delta);
	};
}

// Guess button                    Scope all the way down thus far!
var guessButton = function() {
	var echo = document.kilo;
	var golf = echo.elements["lima"];
	var hotel = golf.value;
		hotel = hotel.toLowerCase();
			for (var i = 0; i < wordChoice.length; i++) {
				if (wordChoice[i] === hotel) {
					alpha[i] = hotel + " ";
					var tango = true;
				};
			golf.value = "";
		}

// Deletes the guessfield
var charlie = document.getElementById("charlie");
	charlie.innerHTML = " ";
	showAlpha();

// Wrong guesses

if (!tango) {
	var wrongLetters = document.getElementById("wrongLetters");
	var november = document.createTextNode(" " + hotel);
	wrongLetters.appendChild(november);
	bravo++;
	var hangman = document.getElementById("hangman");
	hangman.src = "assets/images/hangman" + bravo + ".gif";
};


// Checks letter guesses

var india = true;
for (var i = 0; i < alpha.length; i++) {
	if (alpha[i] === "_ ") {
		india = false;
	};
};

if (india) {
		window.alert("Winner Winner Chicken Dinner!");

};

if (bravo === 6) {
	window.alert("You do not possess the force!")
}
};

// End of the guess button scope

var zulu = function(){
	showAlpha();
}

window.onload = zulu;





	






	



	






























