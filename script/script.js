let userScore= 0;
let computerScore = 0;
let plays = ["rock", "paper", "scissors"]

let PlayerScore = document.querySelector("#playerScore")
let MachineScore = document.querySelector("#computerScore")

let startbtn = document.querySelector('#start-button')
startbtn.addEventListener('click', playGame)

let gameStart = document.querySelector('.gameStart')
gameStart.hidden= true;

function playGame(){
    startbtn.disabled = true;
    gameStart.hidden = false;
}

let rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
playround("rock");
});

let paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
playround("paper");
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
playround("scissors");
});


function newGame() {
    startbtn.textContent = 'Try another Game?';
    startbtn.disabled = false;
    startbtn.onclick = () => location.reload();
}

function playround (playerSelection){
       const computerSelection = plays[Math.floor(Math.random()*plays.length)];
       if(playerSelection === computerSelection) {
        guess.textContent = "It’s a tie! You both choose  " + playerSelection;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
        guess.textContent = `You Win! You choose ${playerSelection }  Computer choose   ${computerSelection}`, userScore++,
        PlayerScore.textContent = "Your score is : " + userScore,
        MachineScore.textContent = "Computer score is : " + computerScore;
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
        guess.textContent = `You fail! You choose  ${playerSelection} Computer choose ${computerSelection}`,
        computerScore++,
        PlayerScore.textContent = "Your score is : " + userScore,
        MachineScore.textContent = "Computer score is : " + computerScore;
        }
        else if (playerSelection ==="paper" && computerSelection === "rock") {
        guess.textContent = `You Win! You choose ${playerSelection} Computer choose ${computerSelection}`, 
        userScore++,
        PlayerScore.textContent = "Your score is : " + userScore,
        MachineScore.textContent = "Computer score is : " + computerScore;
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
        guess.textContent = `You fail! You choose ${playerSelection} Computer choose ${computerSelection}`, 
        computerScore++,
        PlayerScore.textContent = "Your score is : " + userScore,
        MachineScore.textContent = "Computer score is : " + computerScore;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
        guess.textContent = `You Win! You choose ${playerSelection} Computer choose  ${computerSelection}`,
         userScore++,
        PlayerScore.textContent = "Your score is : " + userScore,
        MachineScore.textContent = "Computer score is : " + computerScore;
        }
        else {
        guess.textContent = `You fail! You choose  ${playerSelection} Computer choose ${computerSelection}`, 
        computerScore++,
        PlayerScore.textContent = "Your score is : " + userScore,
        MachineScore.textContent = "Computer score is : " + computerScore;
        }
    }

        
       function stopGame() {
        let rockButton = document.querySelector("#rock");
        let paperButton = document.querySelector("#paper");
        let scissorsButton = document.querySelector("#scissors");
    
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    
        const display = document.querySelector("#display");
        const final = document.createElement("div");
        display.appendChild(final);
        

        if (userScore > computerScore) {
            newGame()
            stopGame.textContent = `You're the winner! Score - You: ${userScore}, Computer: ${computerScore}`;
        } else if (userScore < computerScore) {
            newGame()
            stopGame.textContent = `You lost, better luck next time! Score - You: ${userScore}, Computer: ${computerScore}`;
        } else if (userScore === computerScore) {
            newGame()
        }
    }


