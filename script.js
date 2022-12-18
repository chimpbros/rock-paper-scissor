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
    playerInfo.textContent = `player: ${playerSelection}`;
    computerInfo.textContent = `computer: ${computerSelection}`;
    // if(define condition for player win)
    if ((playerSelection === "rock" &&  computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        playerScore++;
        gameInfo.textContent = `You Win!, ${playerSelection} beats ${computerSelection}`
        // return 1 if player wins
        return 1;
    }
    // else if(define condition for computer win)
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")){
        // return 2 if computer wins
        computerScore++;
        gameInfo.textContent = `You Lose!, ${computerSelection} beats ${playerSelection}`
        return 2;
    }
    // else
    else{
        // return 0 if tie
        gameInfo.textContent = 'Tie'
        return 0;
    }
}
function round(result){
    // if player win increment playerscore by 1
    if(result === 1){
        playerScore++;
        console.log("You Win! " + selectionLower + " beats " + computerSelection);
    }
    // if player lose increment computer score by 1
    else if(result === 2){
        computerScore++;
        console.log("You Lose! " + computerSelection + " beats " + selectionLower);
    }
    else{console.log("Tie");}
    // print current score
    console.log("Player Score: " + playerScore.toString());
    console.log("Computer Score: " + computerScore.toString());
    //    - reports the winner
    if(playerScore > computerScore){
        console.log("Congratulations, You Win!");
    }
    else if(computerScore > playerScore){
        console.log("You Lose!");
    }
    else{console.log("Tie!")}
}

// function to execute when button clicked
function playEvent(playerSelection){
    computerSelect = getComputerChoice();
    let result = playRound(playerSelection, computerSelect);
    return result;
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameInfo = document.querySelector('#game-info');
const playerInfo = document.querySelector('#player-select');
const computerInfo = document.querySelector('#computer-select');
let computerSelect;
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    playEvent('rock');
});
paper.addEventListener('click', () => {
    playEvent('paper');
});
scissors.addEventListener('click', () => {
    playEvent('scissors');
});
