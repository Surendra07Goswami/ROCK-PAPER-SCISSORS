let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    
    };
// Function to play the game

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "dimgray";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lose! ${compChoice} beats , your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
  const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice=== "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else if(userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice, compChoice);
    }
}


choices.forEach((choice) => {
  choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});