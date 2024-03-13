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
        return 2
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let scorePlayer = 0;
let scoreComputer = 0;
function showScore(){
    console.log(`Player has ${scorePlayer}\nComputer has ${scoreComputer}`);
}
function playGame(){ 
    for(let i = 0 ; i < 5; i++){
        console.log("Game started")
        const computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(`Player choice: ${playerSelection} \nComputer choice: ${computerSelection}`);
        if(playRound(playerSelection, computerSelection) == 1){
            scorePlayer += 1;
        }else if(playRound(playerSelection, computerSelection) == 2){
            scoreComputer += 1;
        }else{
            console.log("it's a tie");
        };
        
        showScore();
    }
    if(scorePlayer > scoreComputer){
        console.log("You won");
    }else if(scorePlayer < scoreComputer){
        console.log("Computer won");
    }else{
        console.log("It's a tie");
    }
}

playGame();