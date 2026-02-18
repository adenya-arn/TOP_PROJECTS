const add = ([a, b = 0]) => {
  let answer = a + b;
  b = answer;
  return b;
};

const subtract = ([a, b = 0]) => a - b;

const multiply = ([a, b = 1]) => a * b;

const divide = ([a, b = 1]) => {
  if (b === 0) return "SYNTAX ERROR";
  return a / b;
};
let arrayToOperate = [];

const calculate = [];

const signs = document.querySelector(".signs");

const result = 0;

signs.addEventListener("click", (evnt) => {
  const sign = evnt.target;
  const number = Number(arrayToOperate.join(""));
  calculate.push(number);
  arrayToOperate = [];

  if (sign.id === "equal") {
    if (calculate.length === 1) return calculate[0];
    return result;
  } else if (sign.id === "plus") {
  } else if (sign.id === "minus") {
    calculate.push(Number);
    return (result = subtract(calculate));
  } else if (sign.id === "multiply") {
    calculate.push(Number);
    return (result = multiply(calculate));
  } else if (sign.id === "divide") {
    calculate.push(Number);
    return divide(calculate);
  }

  // if (sign.id === "plus") {
  //   let result = add(calculate);
  //   console.log(result);
  // }
  console.log(calculate);
});

const operate = (evnt) => {
  const button = evnt.target;
  let number = "";

  switch (button.id) {
    case "btn1":
      number = 1;
      arrayToOperate.push(number);
      break;
    case "btn2":
      number = 2;
      arrayToOperate.push(number);
      break;
    case "btn3":
      number = 3;
      arrayToOperate.push(number);
      break;
    case "btn4":
      number = 4;
      arrayToOperate.push(number);
      break;
    case "btn5":
      number = 5;
      arrayToOperate.push(number);
      break;
    case "btn6":
      number = 6;
      arrayToOperate.push(number);
      break;
    case "btn7":
      number = 7;
      arrayToOperate.push(number);
      break;
    case "btn8":
      number = 8;
      arrayToOperate.push(number);
      break;
    case "btn9":
      number = 9;
      arrayToOperate.push(number);
      break;
    case "btn0":
      number = 0;
      arrayToOperate.push(number);
      break;
  }

  // console.log(number);
  // console.log(arrayToOperate);
  // console.log(toCalculate);
};

const inputs = document.querySelector(".numbers");

inputs.addEventListener("click", operate);
