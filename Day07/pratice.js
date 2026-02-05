let maxNumber = 13;
let minNumber = 1;

function generatesRandomNumber(){

    let score = 0;

    let computerChoice = Math.floor(Math.random() * 13) + 1;
    console.log("Starting number:", computerChoice);

    let computerChoiceSecond = Math.floor(Math.random() * 13) + 1;

    let userChoicePrompt = prompt("Will next number be higher, lower, or same?");
    let userChoice = userChoicePrompt.toLowerCase();

    console.log("Next number:", computerChoiceSecond);

    // ✅ Comparison Logic
    if (userChoice === "higher") {

        if (computerChoiceSecond > computerChoice) {
            console.log("Correct! It is higher.");
            score++;
        } else {
            console.log("Wrong!");
        }

    }
    else if (userChoice === "lower") {

        if (computerChoiceSecond < computerChoice) {
            console.log("Correct! It is lower.");
            score++;
        } else {
            console.log("Wrong!");
        }

    }
    else if (userChoice === "same") {

        if (computerChoiceSecond === computerChoice) {
            console.log("Correct! They are the same.");
            score++;
        } else {
            console.log("Wrong!");
        }

    }
    else {
        console.log("Invalid input");
    }

    console.log("Score:", score);


    const playAgainPrompt = prompt("Do you want to play again");
    playAgain = playAgainPrompt? playAgainPrompt.toLowerCase():"no";

    if (playAgain === "yes"){
        generatesRandomNumber();
    } else {
        console.log("thank you for your time")
    }
}

generatesRandomNumber();
