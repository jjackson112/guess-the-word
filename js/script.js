const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const showRemainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

let word = "magnolia";
let guessedLetters =[];

// Show dots as placeholders, placeholderLetters is the empty array, for adding to and the array is empty and will collect the letters then for each letter inside of the word that we passed to the function, we add a "●" to the array

const placeholder = (word) => {
     const placeholderLetters = [];

     for (const letter of word) {
        // console.log(letter);

        placeholderLetters.push("●");
     }
    // join method returns the array into a string, so we end up with "●●●●●●●●"

    wordInProgress.innerText = placeholderLetters.join("");

};
// Call function and pass it to theword variable as an argument
placeholder(word);

// Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page

guessButton.addEventListener("click", function (e) {
    e.preventDefault();

// Empty message paragraph
message.innerText = "";

// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 

const guess = letterInput.value;

// Use regular expressions and the match method to make sure the player uses a single letter
// Validate input here

const goodGuess = acceptInput(guess);

if (goodGuess) {
// We have a letter, guess!
    makeGuess(guess);
}

// empty input field
letterInput.value = "";

});

// Check players' guesses (check event listener too)

const acceptInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        message.innerText = "Give it a go!";
        } else if (input.length > 1) {
        message.innerText = "Please enter one single letter.";
        } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please choose a letter from A to Z.";
        } else {
        return input;
    }
};

// Handle the players' guesses

const makeGuess = function (guess) {
    guess = guess.toUppercase();

    if (guessedLetters.includes(guess)) {
        message.innerText = "Try again! You already got that one!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};

