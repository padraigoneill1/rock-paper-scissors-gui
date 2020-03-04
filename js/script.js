const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");


rock.textContent = 'ROCK';

paper.textContent = 'PAPER';

scissors.textContent = 'SCISSORS';

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

buttons = container.getElementsByClassName("button");
buttons.addEventListener("click", function(event){
   console.log(event);
});




// function playSound(e){
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//   if (!audio) return;
//   audio.currentTime =0;
//   audio.play()
//   console.log(key)
//   key.classList.add('playing')
// }

// function removeTransition(e) {
// if(e.propertyName !== 'transform' )
// this.classList.remove('playing');

// }


let computerPlay = function() {
  let choices = ["rock", "paper", "scissors"];

  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

function playRound(playerSelection, computerSelection) {
  playerChoice = playerSelection.toLowerCase();

  if (playerChoice == computerSelection) {
    return "Its a draw";
  }
  if (playerChoice == "rock") {
    if (computerSelection == "scissors") return "Player Wins";
    else return "Player Loses";
  }

  if (playerChoice == "paper") {
    if (computerSelection == "rock") return "Player Wins";
    else return "Player Loses";
  }

  if ((playerChoice = "scissors")) {
    if (computerSelection == "paper") return "Player Wins";
    else return "Player Loses";
  }
}

let game = function() {
  playerWins = 0;
  computerWins = 0;
  var i = 0;

  // while (i < 5) {
  let playerSelection = prompt("What is your choice?");
  result = playRound(playerSelection, computerPlay());
  if (result == "Its a draw") {
    playerWins++;
    computerWins++;
  } else if (result == "Player Wins") playerWins++;
  else computerWins++;
  console.log(result);
  // i++;
  // }
  if (playerWins > computerWins) console.log("Player is the grand champ");
  else if (playerWins < computerWins)
    console.log("Computer is the grand champ");
  else console.log("You both suck");
};

game();
