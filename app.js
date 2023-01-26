
// Create function to make computer play
function getComputerChoice() {
    let arrChoices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*arrChoices.length);
    return arrChoices[index];
}




let playerCount = 0;
let computerCount = 0;

let drawRound = document.querySelector("p.drawRound");

let player = document.querySelector("p.player>span");
let computer = document.querySelector("p.computer>span");



// Create a function for one round game 
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        drawRound.textContent = "It's a draw! you both played Rock ";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerCount++;
        computer.textContent = computerCount;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCount++;
        player.textContent = playerCount;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        player.textContent = playerCount;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        drawRound.textContent = "It's a draw! you both played Paper ";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerCount++;
        computer.textContent = computerCount;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerCount++;
        computer.textContent = computerCount;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        player.textContent = playerCount;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        drawRound.textContent = "It's a draw! you both played Scissors";
    }
}

let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", (e)=> {
    const playerSelection = e.target.textContent.toLowerCase();
    // Store Computer choice in variable computerSelection
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}));



// Create function "game()" for a 5 round gameplay
/*function game(){
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
*/