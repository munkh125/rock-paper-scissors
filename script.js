function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissor'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function getPlayerChoice(){
    let choice = prompt('Enter Rock, Paper, Scissor');
    return choice;
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if(playerChoice == computerChoice){
        return 0;
    }else if(playerChoice == 'rock' && computerChoice == 'scissor'){
        return 1
    }else if(playerChoice == 'scissor' && computerChoice == 'paper'){
        return 1
    }else if(playerChoice == 'paper' && computerChoice == 'rock'){
        return 1
    }else{
        return 0
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let score = 0;

function playGame(){ 
    for(let i = 0 ; i < 5; i++){
        console.log("Game started")
        const computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        score += playRound(playerSelection, computerSelection);
        console.log(`Player choice: ${playerSelection} \nComputer choice: ${computerSelection}`);
        console.log(`User has : ${score} score`);
    }
}

playGame();