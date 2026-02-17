const add = (a, b) => a * b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) return "SYNTAX ERROR";
  return a / b;
};

const operate = () => {};

const inputs = document.querySelector(".numbers");

inputs.addEventListener("click");
