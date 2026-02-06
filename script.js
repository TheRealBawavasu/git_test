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
  const humanScoreEl = document.querySelector("#human-score");
  const computerScoreEl = document.querySelector("#computer-score");
  const roundStatusEl = document.querySelector("#round-status");
  const finalResultEl = document.querySelector("#final-result");

  function updateScoreboard(message) {
    if (humanScoreEl) {
      humanScoreEl.textContent = humanScore;
    }
    if (computerScoreEl) {
      computerScoreEl.textContent = computerScore;
    }
    if (roundStatusEl) {
      roundStatusEl.textContent = message;
    }
  }

  function announceFinalResult() {
    if (!finalResultEl) {
      return;
    }

    if (humanScore > computerScore) {
      finalResultEl.textContent = "You win the game!";
    } else if (humanScore < computerScore) {
      finalResultEl.textContent = "You lose the game!";
    } else {
      finalResultEl.textContent = "The game is a tie!";
    }
  }

  function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
      const tieMessage = `It's a tie! Both chose ${normalizedHumanChoice}.`;
      console.log(tieMessage);
      updateScoreboard(tieMessage);
      return;
    }

    const humanWins =
      (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
      (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
      (normalizedHumanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
      humanScore += 1;
      const winMessage = `You win! ${normalizedHumanChoice} beats ${computerChoice}.`;
      console.log(winMessage);
      updateScoreboard(winMessage);
      return;
    }

    computerScore += 1;
    const loseMessage = `You lose! ${computerChoice} beats ${normalizedHumanChoice}.`;
    console.log(loseMessage);
    updateScoreboard(loseMessage);
  }

  for (let round = 1; round <= 5; round += 1) {
    const roundMessage = `Round ${round}`;
    console.log(roundMessage);
    updateScoreboard(roundMessage);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Final score:");
  console.log(`You: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
  announceFinalResult();
  updateScoreboard("Game over!");
}

const startButton = document.querySelector("#start-game");
if (startButton) {
  startButton.addEventListener("click", () => {
    const finalResultEl = document.querySelector("#final-result");
    if (finalResultEl) {
      finalResultEl.textContent = "";
    }
    playGame();
  });
}
