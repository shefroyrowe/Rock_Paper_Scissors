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