const answer = document.getElementById("answer");
const button = document.getElementById("button");

button.addEventListener("click", check);

function getRandomValue() {
  const numberRandom = Number(Math.floor(Math.random() * 10) + 1);
  return numberRandom;
}

function getInputValue() {
  const input = document.getElementById("number");
  const value = Number(input.value);
  return value;
}

const randomValue = getRandomValue();

function check() {
  const userGuess = getInputValue();

  if (!userGuess || userGuess < 1 || userGuess > 10) {
    answer.textContent = "Enter a number from 1 to 10";
    answer.style.color = "yellow";
    return;
  }

  if (userGuess < randomValue) {
    answer.textContent = "The number is higher!";
    answer.style.color = "red";
  } else if (userGuess > randomValue) {
    answer.textContent = "The number is lower!";
    answer.style.color = "orange";
  } else {
    answer.textContent = "You guessed it!";
    answer.style.color = "green";
    setTimeout(() => location.reload(), 2000);
  }
}
