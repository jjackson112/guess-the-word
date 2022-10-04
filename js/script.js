const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const displayRemainingGuesses = document.querySelector("span");
const messagesAppear = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia"; 
const guessedLetters = [];

// Show dot as placeholders

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
    messagesAppear.innerText = "";

    const guess = letterInput.value;
  
    const goodChoice = acceptInput(guess);

    if (goodChoice) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

// validate the player's input

const acceptInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length = "0") {
    messagesAppear.innerText = "Give it a go!";
    } else if (input.length > 1) {
    messagesAppear.innerText = "Please enter one single letter.";
    } else if (input.match(acceptedLetter)) {
    messagesAppear.innerText = "Please choose a letter from A to Z.";
    } else {
        return input;
    }
};

//Handle the player's guesses

const makeGuess = function (guess) {
    guess = guess.toUppercase();

    if (guessedLetters.includes(guess)) {
        messagesAppear.innerText = "Try again! You already got that one!";
    } else {
        guessLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordinProgress(guessedLetters);
    }
};

// Show guessed letters

const showGuessedLetters = function () {
    guessList.innerHTML = "";

    for (const letter of guessedLetters) {
        let li = document.createElement("li");
        li.innerText = letter;
        guessedLetters.append(listItem);
    }
};

// Update the word in progress

const updateWordinProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const wordReveal = [];

    for (letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            wordReveal.push(letter.toUppercase());
        } else {
            wordReveal.push("●");
        }
    }
    wordInProgress.innerText = wordReveal.join("");
    winner();
};

// If the player wins

const winner = function () {
    if (word = wordInProgress.innerText) {
        messagesAppear.classList.add(".win");
        messagesAppear.innerHTML = <p class="highlight">You guessed correct the word! Congrats!</p>
    }
};