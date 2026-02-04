// Assumption
// we have to prompt the user to get their inpuit.
// the computer selection will be random
// compare user and computers choice
// announce the winner
// after the winner announcement we ma want to ask the user to play again or uit from the game

function rockPaperScissorsGame(){
    console.log("Getting Started With the Rock, Paper, or Scissors GAME");
    
    const userChoicePrompt = prompt("Enter Rock, Paper, or Scissors")
    let userChoice  = userChoicePrompt.toLowerCase();


    let computerChoice;
    const randomNumber = Math.floor(Math.random()* 3)+1;

    switch (randomNumber){
        case 1 : computerChoice = "rock"; break;
        case 2 : computerChoice = "paper"; break;
        case 3 : computerChoice = "scissors"; break;
    }

    console.log("User selected", userChoice);
    console.log("Computer Selected", computerChoice);


    if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")){
        console.log("You the User Win, yay!!!!")
        } else if (
        (userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")){
        console.log("OH, the computer wins")} else if 
        (userChoice === computerChoice)
        {console.log("The Game is a Tie")} else {
        console.log(" ")}

        const playAgainPrompt = prompt("Do You Want To Play Again")
        const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase(): "no";

        if (playAgain === "yes"){
            rockPaperScissorsGame();
        } else {
            console.log("Thanks For Playing! See you Next Time")
        }
        
        
}
rockPaperScissorsGame();