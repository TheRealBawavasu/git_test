function getComputerChoice() {
  const roll = Math.random();

  if (roll < 1 / 3) {
    return "rock";
  }

  if (roll < 2 / 3) {
    return "paper";
  }

  return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors:");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${normalizedHumanChoice}.`);
      return;
    }

    const humanWins =
      (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
      (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
      (normalizedHumanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
      humanScore += 1;
      console.log(
        `You win! ${normalizedHumanChoice} beats ${computerChoice}.`
      );
      return;
    }

    computerScore += 1;
    console.log(`You lose! ${computerChoice} beats ${normalizedHumanChoice}.`);
  }

  for (let round = 1; round <= 5; round += 1) {
    console.log(`Round ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Final score:");
  console.log(`You: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
