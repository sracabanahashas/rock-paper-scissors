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


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if ((playerSelection === "ROCK") && (computerSelection === "Scissors")) {
        console.log("You win! Rock beats Scissors!");
    }
}