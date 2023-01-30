
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
        drawRound.textContent = "Paper covers Rock, You LOSE!";
        computer.textContent = computerCount;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCount++;
        drawRound.textContent = "Rock breaks Scissors, You Win! ";
        player.textContent = playerCount;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        drawRound.textContent = "Paper covers Rock, You Win! ";
        player.textContent = playerCount;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        drawRound.textContent = "It's a draw! you both played Paper ";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerCount++;
        drawRound.textContent = "Scissors cuts Paper, You LOSE! ";
        computer.textContent = computerCount;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerCount++;
        drawRound.textContent = "Rock breaks Scissors, You LOSE!";
        computer.textContent = computerCount;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        drawRound.textContent = "Scissors cuts Paper, You WIN!";
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
    if(playerCount < 5 && computerCount < 5){
        playRound(playerSelection, computerSelection);
    } 
    
    if (computerCount == 5){
        e.target.disabled = true;
        drawRound.textContent = "COMPUTER WINS!";
        drawRound.style.color = "red";
    }
    else if (playerCount == 5){
        e.target.disabled = true;
        drawRound.textContent = "PLAYER WINS!";
        drawRound.style.color = "green";
    }  
    
}));




// Create function "game()" for a 5 round gameplay
/*function game(){
    for(let i = 1; i <= 5; i++ ){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        playRound(playerSelection,computerSelection);
    }

   

}

let result = game();
console.log(result);
*/