function game(playerSelection, computerSelection){
    if((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")){
        console.log(`It's a tie because the computer also chose ${computerSelection}`)
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Computer chose paper")
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Computer chose scissors")
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Computer chose rock")
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Computer chose scissors")
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Computer chose rock")
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Computer chose paper")
    }else{
        console.log("Invalid")
    }
} 

function getPlayerChoice(){
    let computerChoice = prompt("Enter your pick here");
    return computerChoice.toLowerCase().trim();   
}

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}   




game(getPlayerChoice(), getComputerChoice());
