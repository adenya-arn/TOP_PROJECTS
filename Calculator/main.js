const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) return "NGORI BUDA  😏";
  return a / b;
};

let firstNumber = null;
let operator = null;
let currentInput = "";
let shouldResetDisplay = false;

const signs = document.querySelector(".signs");

signs.addEventListener("click", (evnt) => {
  const sign = evnt.target.id;

  if (!evnt.target.matches("button")) return;

  //pressing equal sign
  if (sign === "equal") {
    if (firstNumber === null || operator === null || currentInput === "")
      return;
    //console.log("no second");

    const secondNumber = Number(currentInput);
    const result = operateCalculation(firstNumber, operator, secondNumber);

    if (typeof result === "number") {
      firstNumber = Number(result.toFixed(5));
    } else {
      firstNumber = result;
    }
    console.log("Result:", result);

    firstNumber = result;
    currentInput = "";
    operator = null;
    shouldResetDisplay = true;
    return;
  }

  //stores new operator for later if user presses an operator first
  if (currentInput === "" && firstNumber !== null) {
    operator = sign;
    return;
  }

  // checks if it's first operation if it is, firstNumber will be null so it will be set,
  // else it will do the operation with the answer being set to the first number, we already got a firstNumber f
  //from line 39
  if (firstNumber === null) {
    firstNumber = Number(currentInput);
  } else {
    firstNumber = operateCalculation(
      firstNumber,
      operator,
      Number(currentInput),
    );
    console.log("Intermediate Result:", firstNumber);
  }
  operator = sign;
  currentInput = "";
});

const operate = (evnt) => {
  if (!evnt.target.matches("button")) return;

  const value = evnt.target.textContent;
  //to prevent multiple decimals
  if (value === "." && currentInput.includes(".")) return;

  //If result was shown reset these two
  if (shouldResetDisplay) {
    currentInput = "";
    shouldResetDisplay = false;
  }
  currentInput += value;
  console.log("Current Input", currentInput);
};

const inputs = document.querySelector(".numbers");

inputs.addEventListener("click", operate);

function operateCalculation(a, operator, b) {
  switch (operator) {
    case "plus":
      return add(a, b);
    case "minus":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  firstNumber = null;
  operator = null;
  currentInput = "";
  shouldResetDisplay = false;

  console.log("Calculator reset");
});
