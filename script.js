console.log ("Scriptin_progress")
const choices = ["rock", "paper", "scissors"];
const choiceEmojis = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultTextEl = document.getElementById("result-text");
const playerDisplayEl = document.getElementById("player-display");
const computerDisplayEl = document.getElementById("computer-display");
const choiceBtns = document.querySelectorAll(".choice-btn");
const resetBtn = document.getElementById("reset-btn");

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    playGame(playerChoice);
  });
});

resetBtn.addEventListener("click", resetGame);

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  // Display choices with animation
  playerDisplayEl.textContent = choiceEmojis[playerChoice];
  computerDisplayEl.textContent = choiceEmojis[computerChoice];

  playerDisplayEl.classList.add("show");
  computerDisplayEl.classList.add("show");

  // Determine winner
  const result = getWinner(playerChoice, computerChoice);

  // Update result text
  resultTextEl.textContent = result.message;
  resultTextEl.className = result.class;

  // Update score
  if (result.winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (result.winner === "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }

  // Remove show class after animation
  setTimeout(() => {
    playerDisplayEl.classList.remove("show");
    computerDisplayEl.classList.remove("show");
  }, 1500);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return { message: "It's a Tie", class: "tie", winner: null };
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return { message: " You Win", class: "win", winner: "player" };
  } else {
    return { message: "You Lose", class: "lose", winner: "computer" };
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  resultTextEl.textContent = "Make your choice";
  resultTextEl.className = "";
  playerDisplayEl.textContent = "";
  computerDisplayEl.textContent = "";
  playerDisplayEl.classList.remove("show");
  computerDisplayEl.classList.remove("show");
}
console.log("Script_loaded")