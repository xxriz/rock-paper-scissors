// Function: Get computer choice

function getComputerChoice(){
    let computerChoice = ["rock","paper","scissors"];
    let randomChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return randomChoice;
}


// Function: Get player choice

function getPlayerChoice(){
    let playerChoice = prompt("Enter your selection: ");
    return playerChoice;
}

// Function: Calculate winner of each round

function playRound(playerSelection, computerSelection){

    let winner = "You Win! " + playerSelection + " beats " + computerSelection;
    let loser = "You Lose! " + computerSelection + " beats " + playerSelection;
    let draw = "Its a Draw!";

    if(playerSelection === "rock" && computerSelection === "rock"){
        return draw;
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return loser;
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return winner;
    } 
    
    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return winner;
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        return draw;
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return loser;
    }

    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return loser;
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return winner;
    } else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return draw;
    }
}



// Function: Play Rock-Paper-Scissors

function game(){
    for(let round = 1; round <= 5; round++){

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));


    }

    if(playerScore > computerScore){
        console.log("Congratulations! You Win! Score is " + playerScore + " - " + computerScore);
    } else if(playerScore < computerScore){
        console.log("Too bad, you lost! Score is " + playerScore + " - " + computerScore );
    } else {
        console.log("You tied! Score is " + playerScore + " - " + computerScore);
    }
}


// Set game score
let playerScore = 0;
let computerScore = 0;

// Play game
game();
