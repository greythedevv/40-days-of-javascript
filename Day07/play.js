console.log("welcome to day 9");


// rock paper scissor game


function rockPaperScissorsGame(){

    

let userChoicePrompt = prompt("choose between rock, paper scissors");
 let userChoice = userChoicePrompt.toLocaleLowerCase();

let computerChoice;
let randomNumber = Math.floor(Math.random()*3)+1

if (randomNumber === 1){
  computerChoice = "rock"
} else if (randomNumber = 2){
    computerChoice = "paper"
}else if ( randomNumber = 3){
    computerChoice = "scissors"
}

console.log (userChoice);
console.log(computerChoice);

if ((userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper"))  
    {console.log ("yah you win congratulation") } 
    else if ( (userChoice === "scissors" && computerChoice === "rock")||
    (userChoice === "rock" && computerChoice === "paper")||
    (userChoice === "paper" && computerChoice === "scissors")){
        console.log("computer wins sorry")
    } else if (userChoice === computerChoice){
        console.log("its a tie")
    } else {console.log (" we dont understand your input")}


    let playAgainPrompt = prompt("do you want to play again?")
    let playAgain = playAgainPrompt? playAgainPrompt.toLocaleLowerCase(): "no";

    if (playAgain === "yes"){
        rockPaperScissorsGame();
    } else{
        console.log("thank you for your time")
    }

}   
 
rockPaperScissorsGame();