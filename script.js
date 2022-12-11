// create an array called "choices" consists of rock, paper, and scissors
let choices = Array("rock", "paper", "scissors");

// 1. get the computer to return random choice between rock, paper , or scissor
//    - create a function "getComputerChoice" that randomly return either rock, paper, or scissors
function getComputerChoice() {
    // create a variable called "computerChoice" to hold the computer choice
    let computerChoice;
    // randomly select an item from the array
    // assign the item to "computerChoice"
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    // return "computerChoice"
    return computerChoice;
}
// 2. play a single round of rock paper scissors
//    - create a function that plays a single round of RPS that takes two parameters - playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    // if(define condition for player win)
    if ((playerSelection === "rock" &&  computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        return "You Win, " + playerSelection + " beats " + computerSelection;
    }
    // else if(define condition for computer win)
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")){
        return "You Lose, " + computerSelection + " beats " + playerSelection
    }
    // else
    else{
        // return tie
        return "Tie"
    }
}
// 3. play a game consists of 5 round
//    - create a function game()
function game(){
    //- call playround() 5 times using for loop
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("choose your weapon")
    }

}
//    - keep track of the score inside variables
//    - reports the winner

