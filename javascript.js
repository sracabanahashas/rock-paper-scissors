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
function playRound(playerSelection, computerSelection, winner) {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    //console.log(winner);

    if ((playerSelection === "ROCK") && (computerSelection === "Scissors")) {
        winner = "Player";
        console.log(winner);
        return ("You win! Rock beats Scissors!");
    } else if ((playerSelection === "PAPER") && (computerSelection === "Scissors")) {
        winner = "Computer";
        console.log(winner);
        return ("You lose! Scissors beat paper!");
    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Scissors")) {
        winner = "None";
        console.log(winner);
        return ("A tie!");
    } else if ((playerSelection === "ROCK") && (computerSelection === "Paper")) {
        winner = "Computer";
        console.log(winner);
        return ("You lose! Paper beats rock!");
    } else if ((playerSelection === "PAPER") && (computerSelection === "Paper")) {
        winner = "None";
        console.log(winner);
        return ("A tie!");
    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Paper")) {
        winner = "Player";
        console.log(winner);
        return ("You win! Scissors beat paper!");
    } else if ((playerSelection === "ROCK") && (computerSelection === "Rock")) {
        winner = "None";
        console.log(winner);
        return ("A tie!");
    } else if ((playerSelection === "PAPER") && (computerSelection === "Rock")) {
        winner = "Player";
        console.log(winner);
        return ("You win! Paper beats rock!");
    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Rock")) {
        winner = "Computer";
        console.log(winner);return ("You lose! Rock beats scissors!");
    }
}

/* Play 5 rounds of Rock Paper Scissors, keeping score and declaring a winner at the end
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    playRound();
    if playRound()     
}*/