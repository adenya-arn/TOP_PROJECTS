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

const decimalBtn = document.querySelector("#decimal");
const display = document.querySelector("#display");
const signs = document.querySelector(".signs");

function updateDisplay(value) {
  display.textContent = value === "" ? "0" : value;
}

signs.addEventListener("click", (evnt) => {
  const sign = evnt.target.id;

  if (!evnt.target.matches("button")) return;

  //pressing equal sign
  if (sign === "equal") {
    if (firstNumber === null || operator === null || currentInput === "")
      return;
    //console.log("no second");

    const secondNumber = Number(currentInput);
    if (isNaN(secondNumber)) return;
    const result = operateCalculation(firstNumber, operator, secondNumber);

    if (typeof result === "number") {
      firstNumber = Number(result.toFixed(5));
    } else {
      firstNumber = result;
    }
    console.log("Result:", result);

    updateDisplay(firstNumber);
    currentInput = "";
    decimalBtn.disabled = false;
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
    if (typeof firstNumber !== "number") return;

    firstNumber = operateCalculation(
      firstNumber,
      operator,
      Number(currentInput),
    );
    console.log("Intermediate Result:", firstNumber);
  }
  operator = sign;
  currentInput = "";
  decimalBtn.disabled = false;
});

const operate = (evnt) => {
  if (!evnt.target.matches("button")) return;

  const value = evnt.target.textContent;
  //to prevent multiple decimals
  if (value === "." && currentInput.includes(".")) return;

  //If result was shown reset these two
  if (shouldResetDisplay) {
    currentInput = "";
    // firstNumber = null;
    shouldResetDisplay = false;
  }
  currentInput += value;
  updateDisplay(currentInput);
  console.log("Current Input", currentInput);
  if (currentInput.includes(".")) {
    decimalBtn.disabled = true;
  } else {
    decimalBtn.disabled = false;
  }
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
    default:
      return a;
  }
}

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  firstNumber = null;
  operator = null;
  currentInput = "";
  shouldResetDisplay = false;
  updateDisplay("0");
  decimalBtn.disabled = false;
  console.log("Calculator reset");
});

const backSpaceBtn = document.querySelector("#backspace");

backSpaceBtn.addEventListener("click", () => {
  if (shouldResetDisplay) return;

  currentInput = currentInput.slice(0, -1);

  updateDisplay(currentInput || "0");

  if (!currentInput.includes(".")) {
    decimalBtn.disabled = false;
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Map keyboard keys to button IDs
  const keyMap = {
    "+": "plus",
    "-": "minus",
    "*": "multiply",
    "/": "divide",
    Enter: "equal",
    "=": "equal",
    Backspace: "backspace",
    ".": "decimal",
  };

  // If it's a number (0–9)
  if (!isNaN(key) && key !== " ") {
    const button = [...document.querySelectorAll(".numbers button")].find(
      (btn) => btn.textContent === key,
    );

    if (button) button.click();
  }

  // If it's an operator or special key
  if (keyMap[key]) {
    const button = document.getElementById(keyMap[key]);
    if (button) button.click();
  }
});
