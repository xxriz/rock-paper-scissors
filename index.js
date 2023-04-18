//Set Game Score

let playerScore = 0
let compScore = 0


//Function: CPU pick random choice

function getComputerChoice(){
    
    let choice = ["rock","paper","scissors"];
    let random = choice[Math.floor(Math.random()*choice.length)] ;
    return random;
    
}


//Function: Decides who wins (Player vs CPU)

function playRound(playerSelection, computerSelection){
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection){
        return ("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        compScore++;
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return ("You win! Rock beats scissors");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        compScore++
        return ("You lose! Scissors beats paper");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        return ("You win! Paper beats rock")
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        compScore++
        return ("You lose! Rock beats scissors")
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return ("You win! Scissors beats paper")
    }
}

//Function: Play Rock-Paper-Scissors

function game(){
    for (let i = 0; i < 5 ; i++){
        let playerSelection = prompt("Pick your move!").toLowerCase()
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelection))
    }
    
    if (playerScore > compScore){
        return("You beat the CPU!")
    }else if (playerScore < compScore){
        return("The CPU beat you!")
    }
    
}

//Execute js

console.log(game())
