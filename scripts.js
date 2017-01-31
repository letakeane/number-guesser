//input
var userGuess = document.getElementById('user-guess');

//buttons
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

//onscreen text
var notification = document.getElementById('notification');
var displayLastGuess = document.getElementById('display-last-guess');
var clue = document.getElementById('clue');

//other global variables
var random1to100 = Math.floor(Math.random() * 100);

//functions!
guessButton.addEventListener('click', function() {
  displayLastGuess.innerText = userGuess.value;
});

clearButton.addEventListener('click', function() {
  displayLastGuess.innerText = "Guess";
  userGuess.value = null;
});

if (userGuess.value === random1to100) {
    clue.innerText = "BOOM!";
    } else if (userGuess.value > random1to100) {
      clue.innerText = "That is too high";
    } else {
clue.innerText = "That is too low";
}


resetButton.addEventListener('click', function() {
  //RESET GAME????????
});
