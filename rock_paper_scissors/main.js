const getComputerChoice = () => {
  let randomNumber = Math.random();

  //Loop that uses random number to pick either Rock, paper or scissors
  if (randomNumber <= 0.3) {
    return "rock";
  } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  let choice = String(prompt("Write Rock, Paper or Scissors. ")).toLowerCase();

  return choice;
};

let humanScore = 0;
let computerScore = 0;
let round = 0;

const playRound = (humanChoice, computerChoice) => {
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        computerScore++;
      } else if (computerChoice === "scissors") {
        humanScore++;
      }
      round++;
      break;
    case "paper":
      if (computerChoice === "rock") {
        humanScore++;
      } else if (computerChoice === "scissors") {
        computerScore++;
      }
      round++;
      break;
    case "scissors":
      if (computerChoice === "paper") {
        humanScore++;
      } else if (computerChoice === "rock") {
        computerScore++;
      }
      round++;
      break;
    default:
      console.log("Invalid choice, try gain");
      return;
  }
};

const playGame = () => {
  while (round < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    return `You win ${humanScore} : ${computerScore}`;
  } else if (humanScore < computerScore) {
    return `Computer wins ${computerScore}: ${humanScore}`;
  }
};

console.log(playGame());
