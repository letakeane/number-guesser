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
var originalReturn = document.getElementById('original-return');
var show = document.getElementById('show');

//onscreen text variables
var notification = document.getElementById('notification');
var displayLastGuess = document.getElementById('display-last-guess');
var clue = document.getElementById('clue');
var levelSection = document.getElementById('level-section');
var instructionText = document.getElementById('instruction-text');
var userRange = document.getElementById('user-range');
var showMin = document.getElementById('show-min');
var showMax = document.getElementById('show-max');
var returnGame = document.getElementById('return-game');
var minMax = document.getElementById('minmax');

//other global variables
var start = 1;
var end = 100;
var secretNumber = parseInt(nextSecret(), 10);
var challengeMode = false;

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
        if (challengeMode == true) {
          end = end + 10;
          showMax.innerText = end;
          resetFunction();
        }
      } else if (intGuess > secretNumber) {
        clue.innerText = "That is too high";
          if (challengeMode == true) {
            start = start - 10;
            showMin.innerText = start;
            resetFunction();
          }
      } else if (intGuess < secretNumber) {
        clue.innerText = "That is too low";
          if (challengeMode == true) {
            start = start - 10;
            showMin.innerText = start;
            resetFunction();
          }
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
function resetDisplay() {
  clearButton.disabled = true;
  resetButton.disabled = true;
  notification.innerText = "";
  displayLastGuess.innerText = "?";
  clue.innerText = "Try it!";
  userGuess.value = null;
};

function resetFunction() {
  if (challengeMode == true) {
    clearButton.disabled = true;
    resetButton.disabled = true;
    notification.innerText = "";
    userGuess.value = null;    start;
    end;
    userRange.classList.remove('hide');
    secretNumber = nextSecret();
  } else {
  resetDisplay();
  secretNumber = nextSecret();
  }
};

resetButton.addEventListener('click', resetFunction);

//show and hide level up section
showLevelUp.addEventListener('click', function() {
  levelSection.classList.add('shown');
  showLevelUp.classList.add('hide');
  show.classList.remove('hide');
  minMax.classList.remove('hide');
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

//when user enters input into minmax form
userMax.addEventListener('keyup', function() {
    submitMinMax.disabled = false;
});

//when user clicks submitminmax button
submitMinMax.addEventListener('click', function() {
  challengeMode = true;
  start = userMin.value;
  end = userMax.value;
  displayLastGuess.innerText = "?";
  clue.innerText = "Try it!";
  userRange.classList.remove('hide');
  returnGame.classList.remove('hide');
  showMin.innerText = start;
  showMax.innerText = end;
  start = parseInt(userMin.value, 10);
  end = parseInt(userMax.value, 10);
  resetFunction();
});

//when user returns to original game
originalReturn.addEventListener('click', function (){
  challengeMode = false;
  start = 1;
  end = 100;
  showLevelUp.classList.remove('hide');
  show.classList.add('hide');
  userRange.classList.add('hide');
  minMax.classList.add('hide');
  returnGame.classList.add('hide');
  resetFunction();
});
