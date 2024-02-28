function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissor'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function getPlayerChoice(){
    let choice = prompt('Enter Rock, Paper, Scissor');
    let choices = ['Rock', 'Paper', 'Scissor'];
    if(choice != choices){
        return "Wrong input";
    }else{
        return choice;
    }
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if(playerChoice == computerChoice){
        return "It's a tie !";
    }else if(playerChoice == 'rock' && computerChoice == 'scissor'){
        return "You won !"
    }else if(playerChoice == 'scissor' && computerChoice == 'paper'){
        return "You won !"
    }else if(playerChoice == 'paper' && computerChoice == 'rock'){
        return "You won !"
    }else{
        return "You lost !"
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(`Player choice: ${playerSelection} \nComputer choice: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));