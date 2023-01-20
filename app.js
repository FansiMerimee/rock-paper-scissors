
// Create function to make computer play
function getComputerChoice() {
    let arrChoices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*arrChoices.length);
    return arrChoices[index];
}

// Create a function to get the player's choice
function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice: rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

// Store the player selection and computer selection into a variable


let computerWin = 0;
let playerWin = 0;

// Create a function for one round game 
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("It's a draw! you both played Rock ");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWin++;
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWin++;
        console.log("You Win! Rock beats Scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWin++;
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a draw! you both played Paper ");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWin++;
        console.log("You Lose! Scissors beats Paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWin++;
        console.log("You Lose! Rock beats Scissors");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWin++;
        console.log("You Win! Scissors beats Paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a draw! you both played Scissors");
    }
}

// Create function "game()" for a 5 round gameplay
function game(){
    for(let i = 1; i <= 5; i++ ){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        playRound(playerSelection,computerSelection);
    }

    if(playerWin > computerWin){
        console.log("Congratulations!!! You are th final Winner.");
    } else if (playerWin < computerWin){
        console.log("Game Over! Computer Wins.");
    } else {
        console.log("Draw Game!");
   }

}

let result = game();
console.log(result);
