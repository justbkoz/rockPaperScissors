const computerPlay = () => {
    let choices = ['rock', 'paper', 'scissors']
    let randomValue = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomValue];
    return randomChoice;
};

document.getElementById('userRock').addEventListener('click', function () {
    const computerSelection = computerPlay();
    gamesPlayed++;
    document.getElementById('played').innerHTML = `total games played ${gamesPlayed}`
    if (computerSelection == 'rock') {
        document.getElementById('whoWonText').innerHTML = `Draw. Both chose Rock`
    } else if (computerSelection == 'paper') {
        computerScore++;
        document.getElementById('whoWonText').innerHTML = `You lose. Paper beats Rock`
    } else {
        document.getElementById('whoWonText').innerHTML = `You Win! Rock beats Scissors`
        playerScore++;
    }
    document.getElementById('currentScore').innerHTML = `Your Score ${playerScore} Skynet's Score ${computerScore}`
});

document.getElementById('userPaper').addEventListener('click', function () {
    const computerSelection = computerPlay();
    gamesPlayed++;
    document.getElementById('played').innerHTML = `total games played ${gamesPlayed}`
    if (computerSelection == 'paper') {
        document.getElementById('whoWonText').innerHTML = `Draw. Both chose Paper`
    } else if (computerSelection == 'scissors') {
        computerScore++;
        document.getElementById('whoWonText').innerHTML = `You lose. Scissors beats Paper`
    } else {
        document.getElementById('whoWonText').innerHTML = `You Win! Paper beats Rock`
        playerScore++;
    }
    document.getElementById('currentScore').innerHTML = `Your Score ${playerScore} Skynet's Score ${computerScore}`
});

document.getElementById('userScissors').addEventListener('click', function () {
    const computerSelection = computerPlay();
    gamesPlayed++;
    document.getElementById('played').innerHTML = `total games played ${gamesPlayed}`
    if (computerSelection == 'scissors') {
        document.getElementById('whoWonText').innerHTML = `Draw. Both chose Scissors`
    } else if (computerSelection == 'rock') {
        computerScore++;
        document.getElementById('whoWonText').innerHTML = `You lose. Rock beats Scissors`
    } else {
        document.getElementById('whoWonText').innerHTML = `You Win! Scissors beats Paper`
        playerScore++;
    }
    document.getElementById('currentScore').innerHTML = `Your Score ${playerScore} Skynet's Score ${computerScore}`
});

let computerScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

