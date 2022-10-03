const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const displayRemainingGuesses = document.querySelector("span");
const emptyParagraphMessagesAppear = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const guessedLetters = [];

const word = "magnolia"; 

const placeholder = function (word) {
    const placeholderLetters = [];

    for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
    }

    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    letterInput.value = "";

    const goodChoice = acceptInput(guess);
    if (goodChoice) {
        makeGuess(guess);
    }
});

// validate the player's input

const acceptInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length = "0") {
    message.innerText = "Give it a go!";
    } else if (input.length > 1) {
    message.innerText = "Please enter one single letter.";
    } else if (input.match(acceptedLetter)) {
    message.innerText = "Please choose a letter from A to Z.";
    } else {
        return input;
    }
};

//Handle the player's guesses

const makeGuess = function (guess) {
    guess = guess.toUppercase();
    if (guessLetters.includes(guess)) {
        message.innerText = "Try again! You already got that one!";
    } else {
        guessLetters.push(guess);
        console.log(guessedLetters);
    }
};
