let currentInput = "0";
let expression = "";

const outputDisplay = document.getElementById("current-output");
const prevDisplay = document.getElementById("prev-operation");

function updateDisplay() {
    outputDisplay.innerText = currentInput;
    prevDisplay.innerText = expression;
}

function appendValue(char) {
    if (currentInput === "0" && char !== ".") {
        currentInput = char;
    } else {
        currentInput += char;
    }
    updateDisplay();
}

function clearScreen() {
    currentInput = "0";
    expression = "";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") currentInput = "0";
    updateDisplay();
}

function calculate() {
    try {
        expression = currentInput + " =";
        // Using Function() instead of eval() for slightly better practice
        currentInput = String(Function('return ' + currentInput)());
    } catch (e) {
        currentInput = "ERR: SYNTAX";
    }
    updateDisplay();
}