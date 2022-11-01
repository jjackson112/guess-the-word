const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const leftoverGuesses = document.querySelector(".remaining");
const displayRemainingGuesses = document.querySelector(".remaining span");
const messagesAppear = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

let word = "magnolia"; 
let guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
    const showResponse = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await showResponse.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[random.index].trim();
    placeholder(word);
};
// Start game
getWord();

// Show dots as placeholders

const placeholder = function (word) {
    const placeholderLetters = [];

    for (const letter of word) {
    // console.log(letter);

    placeholderLetters.push("●");
    }

    wordInProgress.innerText = placeholderLetters.join("");
};

guessButton.addEventListener("click", function (e) {
    e.preventDefault();

    //empty message paragraph
    messagesAppear.innerText = "";

// Grab what was entered in the input
    const guess = textInput.value;
  
    // Make sure it is a single letter
    const goodChoice = acceptInput(guess);

    if (goodChoice) {
        // Let's guess!
        makeGuess(guess);
    }

    textInput.value = "";
});

// validate the player's input

const acceptInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
    messagesAppear.innerText = "Give it a go!";
    } else if (input.length > 1) {
    messagesAppear.innerText = "Please enter one single letter.";
    } else if (!input.match(acceptedLetter)) {
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
        guessedLetters.push(guess);
        // console.log(guessedLetters);
        updateGuessesRemaining(guess);
        showGuessedLetters();
        updateWordinProgress(guessedLetters);
    }
};

// Show guessed letters

const showGuessedLetters = function () {
    // Clear the list first
    guessList.innerHTML = "";

    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessList.append(li);
    }
};

// Update the word in progress

const updateWordinProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const wordReveal = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            wordReveal.push(letter.toUppercase());
        } else {
            wordReveal.push("●");
        }
    }
    wordInProgress.innerText = wordReveal.join("");
    winner();
};


// Count remaining guesses

const updateGuessesRemaining = function (guess) {
   const upperWord = word.toUppercase();
    if (!upperWord.includes(guess)) {
    messagesAppear.innerText = `Sorry, the word doesn't have ${guess}. Try again.`;
    remainingGuesses -= 1;
    } else {
    messagesAppear.innerText = `Great job! The word has ${guess}.`;
    }

    if (remainingGuesses === 0) {
    messagesAppear.innerText = `Game over! The word was <span class="highlight">${word}</span>.`;
    startOver();
    } else if (remainingGuesses === 1) {
    displayRemainingGuesses.innerText = `You have ${remainingGuesses}  guess left.`;
    } else {
    displayRemainingGuesses.innerText = `You have ${remainingGuesses} guesses left.`;
    }
};


// If the player wins

const winner = function () {
    if (word.toUppercase() === wordInProgress.innerText) {
        messagesAppear.classList.add("win");
        messagesAppear.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;

        startOver();
    }
};

// Play it again

const startOver = function () {
    guessButton.classList.add("hide");
    leftoverGuesses.classList.add("hide");
    guessList.classList.add("hide");
    hiddenButton.classList.remove("hide");
};
// reset original values
hiddenButton.addEventListener("click", function () {
    messagesAppear.classList.remove("win");
    guessedLetters = [];
    remainingGuesses = 8;
    displayRemainingGuesses.innerText = `${remainingGuesses} guesses`;
    guessList.innerHTML = "";
    messagesAppear.innerText = "";

    // Get a new word
    getWord();

// Show the right UI elements
    guessButton.classList.remove("hide");
    hiddenButton.classList.add("hide");
    leftoverGuesses.classList.remove("hide");
    guessList.classList.remove("hide");
   
});

