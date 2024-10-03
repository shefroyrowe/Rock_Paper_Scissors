let playerScore = 0;
let computerScore = 0;

//get computer guess
const getComputerChoice = () => {
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
}

//get player guess
const getHumanChoice = () => {
    let playerChoice = prompt("Enter 'Rock, Paper, or Scissors' to play: ",).toLocaleLowerCase();
    return playerChoice;
}

//play game function
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        let draw = `Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. It's a draw!`;
        console.log(draw);
        return;
    } else if (humanChoice === "rock" &&
         computerChoice === "paper" ||
         humanChoice === "scissors" &&
         computerChoice === "rock" ||
         humanChoice === "paper" &&
         computerChoice === "scissors") {
            let computerWin = `Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. Compter wins!`;
            computerScore += 1;
            console.log(computerWin);
            return;
    } else if (computerChoice === "rock" &&
        humanChoice === "paper" ||
        computerChoice === "scissors" &&
        humanChoice === "rock" ||
        computerChoice === "paper" &&
        humanChoice === "scissors") {
           let playerWin = `Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. Player wins!`;
           playerScore += 1;
           console.log(playerWin);
           return;
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);