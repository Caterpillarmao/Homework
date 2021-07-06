class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(previous) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerHTML = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerHTML =
        this.previousOperand + this.operation;
    } else {
      this.previousOperandTextElement.innerHTML = "";
    }
  }
}

//const numberButtons = document.querySelectorAll("[data-number]");
const numberButtons = document.getElementsByClassName("numberButton");
const operationButtons = document.getElementsByClassName("operationButton");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("delete");
const allClearButton = document.getElementById("ac");
const previousOperandTextElement = document.getElementById("previous-operand");
const currentOperandTextElement = document.getElementById("current-operand");
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

console.log("numberButtons", numberButtons);

for (let i = 0; i < numberButtons.length; i++) {
  let button1 = numberButtons[i];

  button1.addEventListener("click", () => {
    calculator.appendNumber(button1.innerText);
    calculator.updateDisplay();
    console.log(button1.innerText);
  });
}

for (let j = 0; j < operationButtons.length; j++) {
  let button2 = operationButtons[j];

  button2.addEventListener("click", () => {
    calculator.chooseOperation(button2.innerText);
    calculator.updateDisplay();
    console.log(button2.innerText);
  });
}

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
