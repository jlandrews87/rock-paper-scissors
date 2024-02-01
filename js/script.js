function getComputerChoice() {
    const result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        return "Rock";
    } else if (result === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function playGame() {
function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "rock" && computerSelection === "Rock") {
            return "It's a tie. Rock does not beat rock."
        } else if (playerSelection === "rock" && computerSelection === "Paper") {
            return "You lose :( Paper covers rock.";
        } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            return "You win! Rock smashes scissors!";
        } else if (playerSelection === "paper" && computerSelection === "Rock") {
            return "You win! Paper covers rock!";
        } else if (playerSelection === "paper" && computerSelection === "Paper") {
            return "It's a tie. Paper does not beat paper.";   
        } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            return "You lose :( Scissors cut paper.";
        } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            return "You lose :( Rock smashes scissors.";
        } else if (playerSelection === "scissors" && computerSelection === "Paper") {
            return "You win! Scissors cut paper!";
        } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
            return "It's a tie. Scissors does not beat scissors."; 
        } else return "Please choose either rock, paper, or scissors";
    }
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
}

let playerSelection = "Rock";
const computerSelection = getComputerChoice();
playGame();
