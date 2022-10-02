const guessList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const emptyParagraphWordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const displayRemainingGuesses = document.querySelector("span");
const emptyParagraphMessagesAppear = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia"; 

const uplaceholder = function (word) {
    const placeholderLetters = [];

    for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
    }

    emptyParagraphWordInProgress.innerText = console.log(placeholderLetters.join(""));
};

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    letterInput.value = "";
    console.log(guess);
});