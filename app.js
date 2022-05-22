const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
let getId;
let computerText;
let resultText;
buttons.forEach((button) =>
  button.addEventListener("click", (el) => {
    getId = el.target.id;
    userChoice.innerHTML = getId;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerText = "rock";
  }
  if (randomNumber === 2) {
    computerText = "paper";
  }
  if (randomNumber === 3) {
    computerText = "scissors";
  }
  computerChoice.innerHTML = computerText;
}

function getResult() {
  if (computerText === getId) {
    resultText = "Draw";
  }
  if (computerText === "rock" && getId === "paper") {
    resultText = "You Win";
  }
  if (computerText === "rock" && getId === "scissors") {
    resultText = "You Lost!";
  }
  if (computerText === "scissors" && getId === "paper") {
    resultText = "You Lost!";
  }
  if (computerText === "scissors" && getId === "rock") {
    resultText = "You Win";
  }
  if (computerText === "paper" && getId === "rock") {
    resultText = "You Lost!";
  }
  if (computerText === "paper" && getId === "scissors") {
    resultText = "You Win";
  }
  result.innerHTML = resultText;
}
