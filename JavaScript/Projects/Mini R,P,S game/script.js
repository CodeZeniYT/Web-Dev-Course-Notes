let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const msgBg = document.querySelector(".msg-container");
const user_score = document.querySelector("#user-score");
const computer_score = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerHTML = `It's a Draw! Play again.`;
  msg.style.color = "black";
  msgBg.style.backgroundColor = "yellow";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user_score.innerHTML = userScore;
    msg.innerHTML = `You won! You chose: ${userChoice} | Computer chose: ${compChoice}`;
    msg.style.color = "black";
    msgBg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computer_score.innerHTML = computerScore;

    msg.innerHTML = `You lost! You chose: ${userChoice} | Computer chose: ${compChoice}`;
    msg.style.color = "black";
    msgBg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});
