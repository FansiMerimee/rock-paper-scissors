function getComputerChoice() {
    let arrChoices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*arrChoices.length);
    return arrChoices[index];
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice: rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}


const computerSelection = getComputerChoice();



