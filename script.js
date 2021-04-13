// creating the GameStatus object where we store the game information
var GameStatus = {
    inputWord : "",
    outputWord : [],
    triesLeft: 14,
    lettersLeft: 0
};

// getting the input word and constructing the GameStatus object
function getInputWord() {
    GameStatus.inputWord = document.getElementById('inputWord').value
    GameStatus.lettersLeft = GameStatus.inputWord.length

    for (var i = 0; i < GameStatus.inputWord.length; ++i) {
        GameStatus.outputWord[i] = '*'
    }
    displayOutputWord()

    // clearing the input box
    document.getElementById('inputWord').value = ''
}

function getInputLetter() {
    var searchedLetter = document.getElementById('letterSearchBox').value
    if (!searchForLetter(searchedLetter)) {
        letterNotFound()
    }
    while (searchForLetter(searchedLetter)) {
        letterFound(searchedLetter)
    }
    displayOutputWord()
    displayUsedLetters(searchedLetter)

    // clearing the input box
    document.getElementById('letterSearchBox').value = ''
}


function searchForLetter(inputLetter) {
    GameStatus.usedLetters += inputLetter
    return GameStatus.inputWord.includes(inputLetter)
}

function letterNotFound() {
    --GameStatus.triesLeft
    if (GameStatus.triesLeft == 0) {
        alert("GAME OVER!")
    }
    else {
        alert("Letter not found!")
    }
    displayTriesLeft()
    displayHangman()
}

function letterFound(inputLetter) {
    // updating the output word so that it shows the found letter
    GameStatus.outputWord.splice(GameStatus.inputWord.indexOf(inputLetter), 1, inputLetter)

    // updating the input word so that it won't include the found letter anymore
    GameStatus.inputWord = GameStatus.inputWord.replace(inputLetter, '*')

    -- GameStatus.lettersLeft
    if (GameStatus.lettersLeft == 0) {
        alert("CONGRATULATIONS!" + "\n" + "YOU HAVE GUESSED THE WORD!")
    }
}

function displayOutputWord() {
    document.getElementById('displayWord').innerHTML = GameStatus.outputWord.join('')
}

function displayTriesLeft() {
    document.getElementById('triesLeft').innerHTML = GameStatus.triesLeft
}

function displayHangman() {
    var hangmanImage = document.getElementById('hangmanImage')
    hangmanImage.src = 'images\\try-' + (15 - GameStatus.triesLeft) + '.jpg';
}

function displayUsedLetters(letter) {
    document.getElementById('lettersUsed').innerHTML += letter + ','
}