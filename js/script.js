const playerScoreLabel = document.getElementById("player-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");
const computerScoreLabel = document.getElementById("ai-score-label");
const playerPick = document.getElementById("player-pick");
const computerPick = document.getElementById("computer-pick");
const weaponsButton = document.querySelectorAll("button");

let playerScore = 0;
  let computerScore = 0;
  let ties = 0;

const getComputerSelection = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
};

const gameHandler = (playerSelection) => {
  const computerSelection = getComputerSelection();
  computerPick.textContent = computerSelection;
  playerPick.textContent = playerSelection;

  const result = playRound(playerSelection, computerSelection);
  

  if (result === "You Win") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (result === "You Lose") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    ties++;
    tieScoreLabel.textContent = ties;
  }
};

weaponsButton.forEach((weaponButton) => {
  weaponButton.addEventListener("click",() => gameHandler(weaponButton.id));
});
