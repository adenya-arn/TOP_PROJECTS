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

// const getHumanChoice = () => {
//   let choice = String(prompt("Write Rock, Paper or Scissors. ")).toLowerCase();

//   return choice;
// };

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

const ul = document.querySelector("ul");
const div = document.querySelector("div");
const p = document.createElement("p");

const clicked = (evnt) => {
  if (humanScore >= 5 || computerScore >= 5) return;
  const btn = evnt.target;

  let humanSelection = "";

  switch (btn.id) {
    case "btn1":
      humanSelection = "rock";
      break;
    case "btn2":
      humanSelection = "paper";
      break;
    case "btn3":
      humanSelection = "scissors";
      break;
    default:
      return;
  }

  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  const roundResults = document.createElement("li");
  roundResults.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;
  ul.appendChild(roundResults);

  const scores = document.createElement("li");
  scores.textContent = `Score: ${humanScore} - ${computerScore}`;
  ul.appendChild(scores);

  if (humanScore >= 5 || computerScore >= 5) {
    const div = document.querySelector("div");
    const p = document.createElement("p");
    p.textContent = `The winner is: ${humanScore > computerScore ? "YOU " : "COMPUTER"}`;

    div.appendChild(p);
  }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", clicked);
});
