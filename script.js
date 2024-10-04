//global variables
const userChoiceButtons = document.querySelectorAll('button');
let rounds = 0;

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

//play game logic
const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    //play one round logic
    const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === computerChoice) {
            let draw = `Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. It's a draw!`;
            console.log(draw);

            console.log("Player: ", playerScore);
            console.log("Pomputer: ", computerScore);
            return;
        } else if (humanChoice === "rock" &&
            computerChoice === "paper" ||
            humanChoice === "scissors" &&
            computerChoice === "rock" ||
            humanChoice === "paper" &&
            computerChoice === "scissors") {
            let computerWin = `Player: ${humanChoice.toUpperCase()} Computer: ${computerChoice.toUpperCase()}. Computer wins!`;
            computerScore += 1;
            console.log(computerWin);

            console.log("Player: ", playerScore);
            console.log("Computer: ", computerScore);
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

            console.log("Player: ", playerScore);
            console.log("Computer: ", computerScore);
            return;
        }
    }//end playRound function

    userChoiceButtons.forEach((button) => {
        button.addEventListener("click", () => {
            switch(button.id) {
                case "rock":
                    playRound("rock", computerSelection());
                    break;
                case "paper":
                    playRound("paper", computerSelection());
                    break;
                case "scissors":
                    playRound("scissors", computerSelection());
                    break;
            }
        });
    });

    //final win logic
    if (rounds === 5 && playerScore > computerScore) {
        console.log("playerScore: " + playerScore, " Player wins! Flawless Victory!");
    } else if (rounds === 5 && computerScore > playerScore) {
        console.log("computerScore: " + computerScore, " Computer wins! Flawless Victory!");
    }

}//end playGame function

//call playGame
playGame();