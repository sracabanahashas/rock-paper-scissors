console.log("Hello World!");

function suckMyDick() {
    console.log("Suck my dick");
}

console.log("Hello world!");

function add7(a) {
    return (a + 7);
}

function multiply(a, b) {
    return (a * b);
}

// Make the computer's play by randomly selecting "Rock", "Paper", or "Scissors"//
function getComputerChoice() {
    let randomSelection = Math.random();
    console.log(randomSelection);
    let computerSelection;

    if (randomSelection <= 0.333) {
        computerSelection = "Rock";
    } else if (randomSelection >= 0.666) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
}

return computerSelection;
}

// Play a round by asking for player's choice, then determining winner based on computer's play//
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if ((playerSelection === "ROCK") && (computerSelection === "Scissors")) {
        console.log("You win! Rock beats Scissors!");
    } else if ((playerSelection === "PAPER") && (computerSelection === "Scissors")) {
        console.log("You lose! Scissors beat paper!");
    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Scissors")) {
        console.log("A tie!");
    } else if ((playerSelection === "ROCK") && (computerSelection === "Paper")) {
        console.log("You lose! Paper beats rock!");
    } else if ((playerSelection === "PAPER") && (computerSelection === "Paper")) {
        console.log("A tie!");
    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Paper")) {
        console.log("You win! Scissors beat paper!");
    } else if ((playerSelection === "ROCK") && (computerSelection === "Rock")) {
        console.log("A tie!");
    } else if ((playerSelection === "PAPER") && (computerSelection === "Rock")) {
        console.log("You win! Paper beats rock!");
    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Rock")) {
        console.log("You lose! Rock beats scissors!");
    }
}