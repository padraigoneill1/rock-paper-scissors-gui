const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const resultsDiv = document.createElement("div");

const playerSelectionP = document.createElement("p");
const computerSelectionP = document.createElement("p");
const roundP = document.createElement("p");
const runningTotalSectionP = document.createElement("p");
const gameNumberP = document.createElement("p");
const playerWonGamesP = document.createElement("p");
const computerWonGamesP = document.createElement("p");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

playerSelectionP.textContent = "Player Selection";
computerSelectionP.textContent = "Computer Selection";
roundP.textContent = "Round Results";
runningTotalSectionP.textContent = "Running Total";
gameNumberP.textContent = "Game Number: ";
playerWonGamesP.textContent = "Player Won : ";
computerWonGamesP.textContent = "Computer Won: ";

resultsDiv.appendChild(playerSelectionP);
resultsDiv.appendChild(computerSelectionP);
resultsDiv.appendChild(roundP);
resultsDiv.appendChild(runningTotalSectionP);
resultsDiv.appendChild(gameNumberP);
resultsDiv.appendChild(playerWonGamesP);
resultsDiv.appendChild(computerWonGamesP);

container.append(resultsDiv);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
var playerSelection = "";

playerWins = 0;
computerWins = 0;
gamesPlayed = 0;

// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", e => {
    console.log(playerSelection);
    playerSelection = button.textContent;

    console.log(playerSelection);
    result = playRound(button.textContent, computerPlay());
    if (result == "playerWon") {
      roundP.textContent = "Player Wins";
      playerWins++;
      gamesPlayed++;
    } else if (result == "computerWon") {
      roundP.textContent = "Player Loses";
      computerWins++;
      gamesPlayed++;
    } else {
      roundP.textContent = "Its a draw";
      playerWins++;
      computerWins++;
      gamesPlayed++;
    }
    playerWonGamesP.textContent = "Player Won: " + playerWins;
    computerWonGamesP.textContent = "Computer Won: " + computerWins;
    gameNumberP.textContent = "Game Number: " + gamesPlayed;

    if (gamesPlayed == 5) {
      if (playerWins > computerWins)
        runningTotalSectionP.textContent = "Player is the grand champ";
      else if (playerWins < computerWins)
        runningTotalSectionP.textContent = "Computer is the grand champ";
      else runningTotalSectionP.textContent = "You both suck";
    }
  });
});

let computerPlay = function() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

function playRound(playerSelection, computerSelection) {
  playerSelectionP.textContent = "Player selected: " + playerSelection;
  computerSelectionP.textContent = "Computer selected: " + computerSelection;

  playerChoice = playerSelection.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  if (playerChoice == computerChoice) {
    return "draw";
  } else if (playerChoice == "rock") {
    if (computerChoice == "scissors") return "playerWon";
    return "computerWon";
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") return "playerWon";
    return "computerWon";
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") return "playerWon";
    return "computerWon";
  }
}
