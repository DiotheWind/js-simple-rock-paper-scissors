// function game(playerSelection, computerSelection){

// }


function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}   


function getPlayerChoice(){
    let computerChoice = prompt("Enter your pick here")
    return computerChoice.toLowerCase().trim()   
}

let test = getPlayerChoice();
console.log(test);