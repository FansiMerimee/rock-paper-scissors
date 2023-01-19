
// Create function to make computer play
function getComputerChoice() {
    let arrChoices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*arrChoices.length);
    return arrChoices[index];
}

// Create aj function to get the player's choice
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
    // your code here!

}

