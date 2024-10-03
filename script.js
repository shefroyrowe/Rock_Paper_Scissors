//global variables
let rounds = 0;

//play game logic
const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;

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

    //call playRound in loop to 5 rounds
    do {
        //prompt user while rounds not = 5 (get player guess)
        const humanSelection = prompt("Enter 'Rock, Paper, or Scissors' to play: ",).toLocaleLowerCase();
        //call playRound here
        playRound(humanSelection, computerSelection());
        //increment rounds by 1
        rounds++;
    } while (rounds < 5);//end do while loop


    //final win logic
    if (rounds === 5 && playerScore > computerScore) {
        console.log("playerScore: " + playerScore, " Player wins! Flawless Victory!");
    } else if (rounds === 5 && computerScore > playerScore) {
        console.log("computerScore: " + computerScore, " Computer wins! Flawless Victory!");
    }

}//end playGame function

//call playGame
playGame();