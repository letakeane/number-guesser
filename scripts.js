//input variables
var userGuess = document.getElementById('user-guess');
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');

//buttons variables
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

//onscreen text variables
var notification = document.getElementById('notification');
var displayLastGuess = document.getElementById('display-last-guess');
var clue = document.getElementById('clue');

//other global variables
var secretNumber = resetFunction();

//functions!
//button response to user adding input
userGuess.addEventListener('keyup', function (){
  clearButton.classList.add('clear-enable');
  resetButton.classList.add('reset-enable');
});

//when user inputs guess and clicks GUESS button
guessButton.addEventListener('click', function() {
  var intGuess = parseInt(userGuess.value, 10);
  if (intGuess < 1) {
    alert("Please choose a number between 1 and 100");
  } else if (intGuess > 100) {
    alert("Please choose a number between 1 and 100");
  } else {
    displayLastGuess.innerText = userGuess.value;
    if (intGuess === secretNumber) {
        clue.innerText = "BOOM!";
      } else if (intGuess > secretNumber) {
        clue.innerText = "That is too high";
      } else if (intGuess < secretNumber) {
        clue.innerText = "That is too low";
      } else {
        clue.innerText = "Please guess a number";
      }
  }
});

//when user clicks CLEAR button
clearButton.addEventListener('click', function() {
  userGuess.value = null;
  clearButton.classList.remove('clear-enable');
});

//when user clicks RESET button
resetButton.addEventListener('click', function () {
  secretNumber = resetFunction();
  resetButton.classList.remove('reset-enable');
  clearButton.classList.remove('clear-enable');
});

function resetFunction () {
  displayLastGuess.innerText = "?";
  clue.innerText = "Try it!";
  userGuess.value = null;
  var newSecret = Math.floor(Math.random() * 101);
  console.log(newSecret);
  return newSecret;
};
