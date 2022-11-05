const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const showRemainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

let word = "magnolia";

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

