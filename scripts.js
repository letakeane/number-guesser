//input variables
var userGuess = document.getElementById('user-guess');
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');

//button variables
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var showButton = document.getElementById('show');
var hideButton = document.getElementById('hide');
var submitMinMax = document.getElementById('submit-minmax');
var showLevelUp = document.getElementById('show-level-up');

//onscreen text variables
var notification = document.getElementById('notification');
var displayLastGuess = document.getElementById('display-last-guess');
var clue = document.getElementById('clue');
var levelSection = document.getElementById('level-section');
var instructionText = document.getElementById('instruction-text');

//other global variables
var start = 1;
var end = 100;
var secretNumber = parseInt(nextSecret(), 10);

//functions!
function nextSecret() {
  return Math.floor(Math.random() * (((end - start) + 1) + start));
}

//enable disabled buttons
userGuess.addEventListener('keyup', function() {
    clearButton.disabled = false;
    resetButton.disabled = false;
});

//when user inputs guess and clicks GUESS button
guessButton.addEventListener('click', function() {
  var intGuess = parseInt(userGuess.value, 10);
  if (intGuess < start) {
    notification.innerText = "Please choose a number between " + start + " and " + end;
  } else if (intGuess > end) {
    notification.innerText = "Please choose a number between " + start + " and " + end;
  } else {
    displayLastGuess.innerText = userGuess.value;
    notification.innerText = "Your last guess was";
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
function resetFunction() {
  clearButton.disabled = true;
  resetButton.disabled = true;
  notification.innerText = "";
  displayLastGuess.innerText = "?";
  clue.innerText = "Try it!";
  userGuess.value = null;
  secretNumber = nextSecret();
};

resetButton.addEventListener('click', resetFunction);

//show and hide level up section
showLevelUp.addEventListener('click', function() {
  levelSection.classList.add('shown');
});

//show and hide instructions
showButton.addEventListener('click', function() {
  instructionText.classList.remove('hide');
  showButton.classList.add('hide');
});

hideButton.addEventListener('click', function() {
  instructionText.classList.add('hide');
  showButton.classList.remove('hide');
});

//when user clicks submitminmax button
submitMinMax.addEventListener('click', function() {
  document.getElementById('show-min').innerText = userMin.value;
  document.getElementById('show-max').innerText = userMax.value;
  start = parseInt(userMin.value, 10);
  end = parseInt(userMax.value, 10);
  resetFunction();
});
