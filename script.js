// Set game score
let playerScore = 0;
let computerScore = 0;

// Select rock-paper-scissors button
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');

// Select reset button
const rematch = document.querySelector('.rematch');
const rematchButton = document.createElement('button');
rematchButton.innerText = 'Play again?';

const outcome = document.querySelector('.outcome');
const result = document.createElement('p');
const body = document.querySelector('body');
const currentScoreContainer = document.querySelector('.currentScoreContainer');

const score = document.getElementById('score');
const h3 = document.createElement('h3');


// Function: Get computer choice
function getComputerChoice(){
    let computerChoice = ["rock","paper","scissors"];
    let randomChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return randomChoice;
}


//Function: Check who reaches 5 wins first
function checkForWinner(playerScore, computerScore){
    if(playerScore === 5){
      h3.innerText = `You won! Score is ${playerScore} - ${computerScore}`;
      outcome.appendChild(h3);
    }
    else if(computerScore === 5){
      h3.innerText = `You lost! Score is ${playerScore} - ${computerScore}`;
      outcome.appendChild(h3);
    }
  }


//Function: Restart game
function endGame(playerScore, computerScore){
    if(playerScore === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        rematch.appendChild(rematchButton)
        rematchButton.classList.add("rematchButton");
    }
    else if(computerScore === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        rematch.appendChild(rematchButton);
        rematchButton.classList.add("rematchButton");
      }
}



//Function: Display current score
function displayCurrentScore(playerScore, computerScore){
    score.innerText = ` ${playerScore} - ${computerScore} `;
    // currentScoreContainer.appendChild(currentScoreMessage);
}




// Function: Calculate winner of each round
function playRound(playerSelection, computerSelection){
    let winner = "You Win! " + playerSelection + " beats " + computerSelection;
    let loser = "You Lose! " + computerSelection + " beats " + playerSelection;
    let draw = "Its a Draw!";
    if(playerSelection === computerSelection)
    {
        result.innerText = draw;
        outcome.appendChild(result)
    } 
    else if(playerSelection === "rock" && computerSelection === "paper")
    {
        computerScore++;
        result.innerText = loser;
        outcome.appendChild(result)
    } 
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        playerScore++;
        result.innerText = winner;
        outcome.appendChild(result)
    }
    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        playerScore++;
        result.innerText = winner;
        outcome.appendChild(result)
    }  
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        computerScore++;
        result.innerText = loser;
        outcome.appendChild(result)
    }
    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore++;
        result.innerText = loser;
        outcome.appendChild(result)
    } else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        playerScore++;
        result.innerText = winner;
        outcome.appendChild(result)
    }
}





// Play game
rockButton.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    displayCurrentScore(playerScore, computerScore);
    endGame(playerScore, computerScore);
  })
  
   paperButton.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    displayCurrentScore(playerScore, computerScore);
    endGame(playerScore, computerScore);
  })
  
   scissorsButton.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    displayCurrentScore(playerScore, computerScore);
    endGame(playerScore, computerScore);
  })


  rematchButton.addEventListener('click', () => {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playerScore = 0;
    computerScore = 0;
    displayCurrentScore(playerScore, computerScore);
    outcome.removeChild(result);
    outcome.removeChild(h3);
    rematch.removeChild(rematchButton);
  })