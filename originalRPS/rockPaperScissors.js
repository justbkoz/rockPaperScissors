const computerPlay = () => {  
    let choices = ['rock', 'paper', 'scissors']
    let randomValue = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomValue];
    return randomChoice;
};

let computerScore = 0;
let playerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
            playerScore++; 
            return `You Win!, ${playerSelection} beats ${computerSelection}`;
    } else if   
        ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
            computerScore++; 
            return `You lose, ${computerSelection} beats ${playerSelection}`;
    } else if 
        (playerSelection.toLowerCase() === computerSelection) {
            return `It's a draw\nYou chose ${playerSelection}\nComputer chose ${computerSelection}`;
    } else return `Looks like your input was invalid\n${playerSelection}`
};

const game = () => {
    const playerSelection = prompt ('Enter your selection\nRock Paper or Scissors');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Player wins: ${playerScore}\nComputer wins: ${computerScore}`)
};

alert ('Lets play Rock Paper Scissors!!!\nFirst to 3 wins is the Champion')
while (computerScore < 3 && playerScore <3) {
    game()
}
 




