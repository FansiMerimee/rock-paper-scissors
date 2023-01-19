function getComputerChoice() {
    let arrChoices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*arrChoices.length);
    return arrChoices[index];
}

const playerSelection = prompt("Enter your choice: rock, paper or scissors?");
playerSelection = playerSelection.toLowerCase();

const computerSelection = getComputerChoice();



