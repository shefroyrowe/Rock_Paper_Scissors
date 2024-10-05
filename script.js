//global variables
const userSelectionButtons = document.querySelectorAll('button');
const displayResults = document.getElementById('results');
let playerScore = 0;
let computerScore = 0;
let round = 0;

//function to disable user options buttons after all rounds end
const disableUserSelectionButtons = () => {
    userSelectionButtons.forEach((button) => {
        button.id === "reset" ? button.disabled = false : button.disabled = true;
    });
}

//get computer guess
const computerSelection = () => {
    let choice = '';
    const getRndom = Math.floor(Math.random() * 3);
    if (getRndom === 0) {
        choice = "rock";
    } else if (getRndom === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}//end get computer guess

//final win message logic
const winnerMsg = () => {
    if (round === 5 && playerScore > computerScore) {
        displayResults.textContent = "player: " + playerScore + " Player wins! Flawless Victory!";
        disableUserSelectionButtons();
        return;
    } else if (round === 5 && computerScore > playerScore) {
        displayResults.textContent = "computer: " + computerScore + " Computer wins! Flawless Victory!";
        disableUserSelectionButtons();
        return;
    }
};

//play round logic
const playRound = (humanChoice, computerChoice) => {

    //round draw logic
    if (humanChoice === computerChoice) {
        round++;
        displayResults.textContent = `Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. It's a draw!
             Player: ${playerScore}
             Computer: ${computerScore}
             rounds: ${round}
             `;
        winnerMsg();

        //computer wins round logic
    } else if (humanChoice === "rock" &&
        computerChoice === "paper" ||
        humanChoice === "scissors" &&
        computerChoice === "rock" ||
        humanChoice === "paper" &&
        computerChoice === "scissors") {
        computerScore++;
        round++;
        displayResults.textContent = `
            Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. Computer wins!
             Player: ${playerScore}
             Computer: ${computerScore}
             rounds: ${round}
            `;
        winnerMsg();

        //player wins round logic
    } else if (computerChoice === "rock" &&
        humanChoice === "paper" ||
        computerChoice === "scissors" &&
        humanChoice === "rock" ||
        computerChoice === "paper" &&
        humanChoice === "scissors") {
        playerScore++;
        round++;
        displayResults.textContent = `
            Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. Player wins!
             Player: ${playerScore}
             Computer: ${computerScore}
             rounds: ${round}
             `;
        winnerMsg();
    }

}//end playRound function


//play game function and logic
const playGame = () => {

    //mount event listener unto player selection buttons
    userSelectionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            switch (button.id) {
                case "rock":
                    playRound("rock", computerSelection());
                    break;
                case "paper":
                    playRound("paper", computerSelection());
                    break;
                case "scissors":
                    playRound("scissors", computerSelection());
                    break;
                case "reset":
                    playerScore = 0;
                    computerScore = 0;
                    round = 0;
                    window.location.reload();
            }
        });
    });// end for each loop

}//end playGame function

//call playGame
playGame();