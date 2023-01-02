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
    playerInfo.textContent = playerScore;
    computerInfo.textContent = computerScore;
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
// reset game
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    display.forEach(item => item.classList.toggle('invisible'));
    playButton.classList.toggle('hidden');
    playButton.textContent = 'Play Again';
}
// toggle play-container
function playToggle(){
    playContainer.classList.toggle('hidden');
}
// shrink the container
function shrink(){
    playContainer.style.height = 'auto';
    playerContainer.classList.toggle('hidden');
    computerContainer.classList.toggle('hidden');
    mainContainer.style.cssText = 'justify-content : center; height: auto;';
    selectionDisplay.classList.toggle('hidden');
}
// the first to 5 win
function score(){
    playerScoreDisplay.textContent = `Player Score:`;
    computerScoreDisplay.textContent = `Computer Score:`;
    if(playerScore === 5){
        gameInfo.textContent = 'Congratulations! You Win.';
        resetGame();
        playToggle();
        shrink();
    }
    if(computerScore === 5){
        gameInfo.textContent = 'You Lose!';
        resetGame();
        playToggle();
        shrink();
    }
}

// function to execute when button clicked
function playEvent(playerSelection){
    computerSelect = getComputerChoice();
    let result = playRound(playerSelection, computerSelect);
    if(computerSelect === 'rock'){
        computerRock.classList.add('clicked');
    }
    else if(computerSelect === 'paper'){
        computerPaper.classList.add('clicked');
    }
    else{
        computerScissors.classList.add('clicked');
    }
    setTimeout(function () {
        computerButton.forEach(item => item.classList.remove('clicked'));
    }, 1000);
    return result;
}



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameInfo = document.querySelector('#game-info');
const playerInfo = document.querySelector('#player-select');
const computerInfo = document.querySelector('#computer-select');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playButton = document.querySelector('#play');
const selectionDisplay = document.querySelector('#selection-display');
const display = document.querySelectorAll('.display');
const mainContainer = document.querySelector('.main-container');
const playContainer = document.querySelector('.play-container');
const playerContainer = document.querySelector('#selection');
const computerContainer =document.querySelector('#computer-selection');
const computerRock = document.querySelector('.rock');
const computerPaper = document.querySelector('.paper');
const computerScissors = document.querySelector('.scissors');
const selectionButtons = document.querySelectorAll('#selection button');
const computerButton = document.querySelectorAll('#computer-selection > .display');
let computerSelect;
let playerScore = 0;
let computerScore = 0;

mainContainer.classList.add('hidden');
playContainer.style.height = '90vh';
display.forEach(item => item.classList.add('invisible'));
rock.addEventListener('click', () => {
    playEvent('rock');
    score();
});
paper.addEventListener('click', () => {
    playEvent('paper');
    score();
});
scissors.addEventListener('click', () => {
    playEvent('scissors');
    score();
});

// add hover and click effect to the button
selectionButtons.forEach(function(item) {
    item.addEventListener('mouseenter', () => item.classList.add('hover'));
    item.addEventListener('click', () => {
        item.classList.add('clicked')
        // set timeout for click effect
        setTimeout(function () {
            selectionButtons.forEach(item => item.classList.remove('clicked'));
        }, 1000);
});
});

// remove hover effect
selectionButtons.forEach(item => item.addEventListener('mouseleave', () => item.classList.remove('hover')));

playButton.addEventListener('click', () => {
    if(playButton.textContent === 'Play'){
        resetGame();
        mainContainer.classList.toggle('hidden');
        playToggle();
    }
    else{
        window.location.reload();
    }
});
