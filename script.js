// need buttons for attacks
// HP needs to be implemented
// keep playing until out of HP or enemy is go to zero
// buttons & choices
let playerScore = 0;
let computerScore = 0;
let outcomeFlavorText = ''
let display = "Rock, paper, scissors ... shoot!"


// gameplay loop functions
scoreboardUpdate();
displayTextPlace();

const rockB = document.querySelector('#rock-btn');
rockB.addEventListener('click', () => {
        playerSelection = "rock";
        computerPlay()
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        scoreboardUpdate();
        roundOutcome();
        if (playerScore == 5 || computerScore == 5) {
            gameOutcome(playerScore, computerScore);
            displayTextPlace();

            // disables the buttons once game is over
            document.getElementById("rock-btn").disabled = true;
            document.getElementById("paper-btn").disabled = true;
            document.getElementById("scissors-btn").disabled = true;
        }
});

const paperB = document.querySelector('#paper-btn');
paperB.addEventListener('click', () => {
        playerSelection = "paper";
        computerPlay()
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        scoreboardUpdate();
        roundOutcome();
        if (playerScore == 5 || computerScore == 5) {
            gameOutcome(playerScore, computerScore);
            displayTextPlace();

            // disables the buttons once game is over
            document.getElementById("rock-btn").disabled = true;
            document.getElementById("paper-btn").disabled = true;
            document.getElementById("scissors-btn").disabled = true;
        }
});

const scissorsB = document.querySelector('#scissors-btn');
scissorsB.addEventListener('click', () => {
        playerSelection = "scissors";
        computerPlay()
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        scoreboardUpdate();
        roundOutcome();
        if (playerScore == 5 || computerScore == 5) {
            gameOutcome(playerScore, computerScore);
            displayTextPlace();

            // disables the buttons once game is over
            document.getElementById("rock-btn").disabled = true;
            document.getElementById("paper-btn").disabled = true;
            document.getElementById("scissors-btn").disabled = true;
        }
});

// reset button
const resetB = document.querySelector("#reset-btn");
resetB.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    scoreboardUpdate();
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;
    display = "Rock, paper, scissors ... shoot!"
    displayTextPlace();
    
    
    
});

// general display/game outcome text
function displayTextPlace() {
    document.getElementById("displayText").innerText = display;
}


// update scoreboard

function scoreboardUpdate() {
    document.getElementById("scoreboardComputer").innerText = computerScore;
    document.getElementById("scoreboardPlayer").innerText= playerScore;
}

// update round outcome flavor text
function roundOutcome() {
    document.getElementById("outcomeText").innerText = outcomeFlavorText
}

    // calculates who wins via who gets five wins first
    function gameOutcome(playerScore, computerScore) {
            if (playerScore > computerScore) {
                display = 'You won by being the first one to reach five wins, congrats!';

            } else if (playerScore < computerScore) {
                display = 'Too bad! The computer was the first to reach five wins, better luck next time!';

            }
           
    }
    
    //assigns the computer a pick for the game
    function computerPlay() {
        const compChoice = ["rock", "paper", "scissors"]

        const randNumber = Math.floor(Math.random() * 3)

        let compPick = compChoice[randNumber];
        console.log('The computer has decided what it is going to use.')
        
        return compPick;
        
    }       
    

    // play one round
    function playRound(playerSelection, computerSelection) {  
        // compPick is rock
        console.log('Rock, paper, scissors.... shoot!')

        if (computerSelection === "rock") {

            // vs player picking rock
            if (playerSelection === "rock") {
                outcomeFlavorText = `Draw!`;
            // vs player picking paper
            } else if (playerSelection === "paper") {
                outcomeFlavorText = `You win, because ${playerSelection} beats ${computerSelection}!`;
                playerScore++
            // vs player picking scissors
            } else if (playerSelection === "scissors") {
                outcomeFlavorText = `You lose, because ${computerSelection} beats ${playerSelection}!`;
                computerScore++
            }
        }
        
        //compPick is paper
        else if (computerSelection === "paper") {
            // vs player picking paper
            if (playerSelection === "paper") {
                outcomeFlavorText = `Draw!`;
            // vs player picking scissors
            } else if (playerSelection === "scissors") {
                outcomeFlavorText = `You win, because ${playerSelection} beats ${computerSelection}!`;
                playerScore++
            // vs player picking rock
            } else if (playerSelection === "rock") {
                outcomeFlavorText = `You lose, because ${computerSelection} beats ${playerSelection}!`;
                computerScore++
            }
            
        }
            
        //compPick is scissors
        else if (computerSelection === "scissors") {
            // vs player picking scissors
            if (playerSelection === "scissors") {
                outcomeFlavorText = `Draw!`;
            // vs player picking rock
            } else if (playerSelection === "rock") {
                outcomeFlavorText = `You win, because ${playerSelection} beats ${computerSelection}!`;
                playerScore++
            // vs player picking paper
            } else if (playerSelection === "paper") {
                outcomeFlavorText = `You lose, because ${computerSelection} beats ${playerSelection}!`;
                computerScore++
            }
                
        }
    }
