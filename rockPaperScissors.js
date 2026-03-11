const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else {
        return ('Error')
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'scissors'
    } else if (randomNumber === 2) {
        return 'paper'
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player wins';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer wins'
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player wins';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'Player wins';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer wins';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer wins';
    } else {
        return 'tied'
    }
}

function playGame() {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    if (userChoice === 'Error') {
        console.log('Please make a selection')
    } else {
        console.log(`player chooses ${userChoice}, computer chooses ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice))
    }
}

playGame();