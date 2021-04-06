var inputWord = new Array, outputWord = new Array, triesLeft = 14, lettersLeft, lettersUsed = new Array;

// adding the input word to the game
function addWord() {
  if (patternCheck()) {
    inputWord = document.getElementById("inputWord").value;
    lettersLeft = inputWord.length;
    outputWordConstruction();
    displayWord();
  }
  // we clear the input box
  document.getElementById('inputWord').value = '';
}

// searching for the input letter within the word
function searchLetter() {
  if (patternCheck()) {
    var inputLetter = document.getElementById("letterSearchBox").value;
    if(!inputWord.includes(inputLetter)) {
      letterNotFound();
    }
    while (inputWord.includes(inputLetter)) {
      letterFound();

      // we update the outputWord so that it displays the found letter
      outputWord.splice(inputWord.indexOf(inputLetter), 1, inputLetter);
      displayWord();

      // we replace the found letter in the inputWord so that it can't be found again
      inputWord = inputWord.replace(inputLetter, '*');
    }
  }
  displayTriesLeft();
  displayUsedLetters(inputLetter);

  // we clear the letter search box
  document.getElementById('letterSearchBox').value = '';
}

// if letter is found and WINING the game
function letterFound() {
  --lettersLeft;
  if (lettersLeft == 0) {
    alert("Congratulations!" + "\n" + "You have guessed the word!");
    displayHangman();
  }
}

// if letter is not found and LOSING the game
function letterNotFound() {
  --triesLeft;
  if (triesLeft > 0) {
    alert("The word does NOT contain the letter");
  } else {
    alert("Game Over!" + "\n" + "No more tries left");
  }
  displayHangman();
}

function outputWordConstruction() {
  for (var i = 0; i < inputWord.length; ++i) {
    outputWord[i] = '*';
  }
}

function displayWord() {
  document.getElementById('displayWord').innerHTML = outputWord.join("");
}

function displayTriesLeft() {
  document.getElementById('triesLeft').innerHTML = triesLeft;
}

function displayUsedLetters(letter) {
  if (!lettersUsed.includes(letter)) {
    lettersUsed.push(letter);
  }
  document.getElementById('lettersUsed').innerHTML = lettersUsed;
}

// pattern check of inputs
function patternCheck() {
  if (document.getElementById('inputWord').validity.patternMismatch ||
    document.getElementById('letterSearchBox').validity.patternMismatch) {
    alert("Invalid input type");
    return 0;
  }
  return 1;
}

// changing the hangman image
function displayHangman() {
  if (triesLeft == 13) {
    document.getElementById('hangmanImage').src = 'images\\try-2.jpg';
  }
  if (triesLeft == 12) {
    document.getElementById('hangmanImage').src = 'images\\try-3.jpg';
  }
  if (triesLeft == 11) {
    document.getElementById('hangmanImage').src = 'images\\try-4.jpg';
  }
  if (triesLeft == 10) {
    document.getElementById('hangmanImage').src = 'images\\try-5.jpg';
  }
  if (triesLeft == 9) {
    document.getElementById('hangmanImage').src = 'images\\try-6.jpg';
  }
  if (triesLeft == 8) {
    document.getElementById('hangmanImage').src = 'images\\try-7.jpg';
  }
  if (triesLeft == 7) {
    document.getElementById('hangmanImage').src = 'images\\try-8.jpg';
  }
  if (triesLeft == 6) {
    document.getElementById('hangmanImage').src = 'images\\try-9.jpg';
  }
  if (triesLeft == 5) {
    document.getElementById('hangmanImage').src = 'images\\try-10.jpg';
  }
  if (triesLeft == 4) {
    document.getElementById('hangmanImage').src = 'images\\try-11.jpg';
  }
  if (triesLeft == 3) {
    document.getElementById('hangmanImage').src = 'images\\try-12.jpg';
  }
  if (triesLeft == 2) {
    document.getElementById('hangmanImage').src = 'images\\try-13.jpg';
  }
  if (triesLeft == 1) {
    document.getElementById('hangmanImage').src = 'images\\try-14.jpg';
  }
  if (lettersLeft == 0) {
    document.getElementById('hangmanImage').src = 'images\\winning.jpeg';
  }
}