
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
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

// Create a function for one round game 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a draw! you both played Rock ";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a draw! you both played Paper ";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beat Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a draw! you both played Scissors";
    }
}



