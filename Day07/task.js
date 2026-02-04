//  * Let us play a number guessing game.
//  * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user 
// if the entered number is lower or higher. With this information, user will change the number and 
// finally guess the right number. You also need to show the number of attempts made by users to 
// rach to this right guess.
//  *

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again


let maxNumber = 10;
let minNumber = 1;

function startSecretNumberGame() {
    let computerChoice = Math.floor(Math.random() * 10) + 1;
    let count = 0;
    let userChoice = null;

    console.log("Welcome to the number guessing game!");
    console.log("Try to guess a number between 1 and 10");

    while (userChoice !== computerChoice) {
        const userChoicePrompt = prompt("Pick a number between 1 and 10");
        userChoice = parseInt(userChoicePrompt);

        count++;

        if (isNaN(userChoice) || userChoice < minNumber || userChoice > maxNumber) {
            console.log(`Invalid input! Enter a number between ${minNumber} and ${maxNumber}.`);
            continue;
        }

        if (userChoice > computerChoice) {
            console.log("Too High! Try again");
        } else if (userChoice < computerChoice) {
            console.log("Too Low! Try again");
        } else {
            console.log(`Congrats! You guessed the number in ${count} attempts!`);
        }
    }
    const playAgainPrompt = prompt ("Do You Want To Play Again")
    playAgain = playAgainPrompt? playAgainPrompt.toLocaleLowerCase(): "no";

    if (playAgain === "yes"){
        startSecretNumberGame();
    } else {
        console.log("Thank you for your time")
    }
}

startSecretNumberGame();



