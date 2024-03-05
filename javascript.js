console.log("Hello World!");

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
    console.log(playerSelection);
    resultItem = document.createElement('ul');
    resultItem.textContent = 'Player used: ' + playerSelection + '!';
    console.log(resultItem);
    result.appendChild(resultItem);
    
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    resultItem = document.createElement('ul');
    resultItem.textContent = 'Computer used: ' + computerSelection + '!';
    console.log(resultItem);
    result.appendChild(resultItem);

    

    if ((playerSelection === "ROCK") && (computerSelection === "Scissors")) {
        winner = "Player";
        console.log(winner);

        resultItem = document.createElement('ul');
        resultItem.textContent = winner + ' wins!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Player score: ' + ++playerScore;
        result.appendChild(resultItem);
        return winner;

    } else if ((playerSelection === "PAPER") && (computerSelection === "Scissors")) {
        winner = "Computer";
        console.log(winner);

        resultItem = document.createElement('ul');
        resultItem.textContent = winner + ' wins!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Computer score: ' + ++computerScore;
        result.appendChild(resultItem);

        return winner;

    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Scissors")) {
        winner = "None";
        console.log(winner);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'A tie!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Player score: ' + playerScore + '. ' + "Computer score: " + computerScore;
        result.appendChild(resultItem);

        return winner;
    } else if ((playerSelection === "ROCK") && (computerSelection === "Paper")) {
        winner = "Computer";
        console.log(winner);

        resultItem = document.createElement('ul');
        resultItem.textContent = winner + ' wins!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Computer score: ' + ++computerScore;
        result.appendChild(resultItem);

        return winner;

    } else if ((playerSelection === "PAPER") && (computerSelection === "Paper")) {
        winner = "None";
        console.log(winner);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'A tie!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Player score: ' + playerScore + '. ' + "Computer score: " + computerScore;
        result.appendChild(resultItem);

        return winner;

    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Paper")) {
        winner = "Player";
        console.log(winner);
        resultItem = document.createElement('ul');
        resultItem.textContent = winner + ' wins!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Player score: ' + ++playerScore;
        result.appendChild(resultItem);
        return winner;

    } else if ((playerSelection === "ROCK") && (computerSelection === "Rock")) {
        winner = "None";
        console.log(winner);
        resultItem = document.createElement('ul');
        resultItem.textContent = 'A tie!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Player score: ' + playerScore + '. ' + "Computer score: " + computerScore;
        result.appendChild(resultItem);
        return winner;

    } else if ((playerSelection === "PAPER") && (computerSelection === "Rock")) {
        winner = "Player";
        console.log(winner);
        resultItem = document.createElement('ul');
        resultItem.textContent = winner + ' wins!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Player score: ' + ++playerScore;
        result.appendChild(resultItem);
        return winner;

    } else if ((playerSelection === "SCISSORS") && (computerSelection === "Rock")) {
        winner = "Computer";
        console.log(winner);
        resultItem = document.createElement('ul');
        resultItem.textContent = winner + ' wins!';
        result.appendChild(resultItem);

        resultItem = document.createElement('ul');
        resultItem.textContent = 'Computer score: ' + ++computerScore;
        result.appendChild(resultItem);
        return winner;
    }
}

rockBtn = document.querySelector('#rock');
paperBtn = document.querySelector('#paper');
scissorsBtn = document.querySelector('#scissors');
result = document.querySelector('#result');

let roundWinner;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
    playRound('ROCK');
});

paperBtn.addEventListener('click', () => {
    playRound('PAPER');
});

scissorsBtn.addEventListener('click', () => {
    roundWinner = playRound('SCISSORS');
});

document.addEventListener('click', () => {
    if (playerScore == 5) {
        resultItem = document.createElement('ul');
            resultItem.textContent = 'Player wins first to 5!';
            result.appendChild(resultItem);
    };
    
    if (computerScore == 5) {
        resultItem = document.createElement('ul');
            resultItem.textContent = 'Computer wins first to 5!';
            result.appendChild(resultItem);
    };
})
