const addition = document.getElementById("addition");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let displayValue = document.getElementById("display-value");

let firstValue = "";
let secondValue = "";
let operatorValue = "";

function performOperation(firstValue, secondValue, operator) {
  let num1 = parseFloat(firstValue);
  let num2 = parseFloat(secondValue);
  //     // Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
  if (operator === "+") {
    let sum = num1 + num2;
    return sum;
  } else if (operator === "-") {
    let subtraction = num1 - num2;
    return subtraction;
  } else if (operator === "*") {
    let multiply = num1 * num2;
    return multiply;
  } else if (operator === "/") {
    let divide = num1 / num2;
    return divide;
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let inputText = event.target.innerText;
    // read first number
    if (operatorValue === "") {
      firstValue += inputText;
      displayValue.innerText = firstValue;
    } else {
      secondValue += inputText;
      displayValue.innerText = `${firstValue} ${operatorValue} ${secondValue}`;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    let inputText = event.target.innerText;

    // if user has not clicked equal, store and display the operator
    if (inputText === "=") {
      if (firstValue && secondValue && operatorValue) {
        let computation = performOperation(
          firstValue,
          secondValue,
          operatorValue
        );
        displayValue.innerText = computation;
        firstValue = "";
        secondValue = "";
        operatorValue = "";
      }
    } else {
      operatorValue = inputText;
      displayValue.innerText = `${firstValue} ${inputText}`;
    }
  });
});
