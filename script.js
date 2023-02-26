// Variables to keep track of player and computer score
let playerScore = 0;
let computerScore = 0;

// Main function where five rounds of rock, paper, and scissors are played and displays who won the entire game
function game(){
    for(let i = 1; i <= 5; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }

    console.log(`You: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    if(playerScore === computerScore){
        console.log("It's a tie");
    }else if(playerScore > computerScore){
        console.log("You won the game!");
    }else{
        console.log("Sadly, you lost the game!");
    }
}

// Function to compare player's selection and computer's selection and displays the result
function playRound(playerSelection, computerSelection){
    if((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")){
        console.log(`It's a tie because the computer also chose ${computerSelection}`)
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Computer chose paper");
        computerScore++;
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Computer chose scissors");
        playerScore++;
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Computer chose rock");
        playerScore++;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Computer chose scissors");
        computerScore++;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Computer chose rock");
        computerScore++;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Computer chose paper");
        playerScore++;
    }else{
        console.log("Invalid");
    }
} 

// The function where the player gets to choose rock, paper or scissors
function getPlayerChoice(){
    let computerChoice = prompt("Enter your pick here");
    return computerChoice.toLowerCase().trim();   
}

// The function where the computer randomly chooses rock, paper or scissors
function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}   

// Start the program
game();


