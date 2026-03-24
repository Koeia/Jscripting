const getUserChoice = (userInput) => {
  userInput.toLowerCase();
  switch (userInput) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      return "error";
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "rock" && computerChoice === "scissors") {
    return "Player wins";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Computer wins";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "Player wins";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "Player wins";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "Computer wins";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Computer wins";
  } else {
    return "tied";
  }
}

//

function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  if (userChoice === "Error") {
    console.log("Please make a selection");
  } else {
    console.log(
      `player chooses ${userChoice}, computer chooses ${computerChoice}`,
    );
    console.log(determineWinner(userChoice, computerChoice));
  }
}

playGame();
