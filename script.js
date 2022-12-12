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
        // return 1 if player wins
        return 1;
    }
    // else if(define condition for computer win)
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")){
        // return 2 if computer wins
        return 2;
    }
    // else
    else{
        // return 0 if tie
        return 0;
    }
}
// 3. play a game consists of 5 round
//    - create a function game()
function game(){
    //- call playround() 5 times using for loop
    // keep track of the score inside variables
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        // prompt user for choice
        var playerSelection = prompt("choose your weapon");
        // convert choice to lower case
        var selectionLower = playerSelection.toLowerCase();
        // ensure user input are either rock paper or scissors
        while(true){
            if(choices.includes(selectionLower)){
                break
            }
            else{console.log("please enter a valid weapon");}
            playerSelection = prompt("choose your weapon");
            selectionLower = playerSelection.toLowerCase();
        }
        // play 5 round game
        let computerSelection = getComputerChoice();
        let result = playRound(selectionLower, computerSelection);

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
    }
    //    - reports the winner
    if(playerScore > computerScore){
        console.log("Congratulations, You Win!");
    }
    else if(computerScore > playerScore){
        console.log("You Lose!");
    }
    else{console.log("Tie!")}
}

game()

