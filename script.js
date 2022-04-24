// functions
function add(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
}

function minus(num1, num2) {
    console.log(parseInt(num1) - parseInt(num2));
}

function multiply(num1, num2) {
    console.log(parseInt(num1) * parseInt(num2));
}

function divide(num1, num2) {
    console.log(parseInt(num1) / parseInt(num2));
}

// input
const num1 = prompt("first number: ");
const symbol = prompt("symbol: ");
const num2 = prompt("second number: ");

// output
if (symbol == '+') {
    add(num1, num2)
}

if (symbol == '-') {
    minus(num1, num2)
}

if (symbol == '*') {
    multiply(num1, num2)
}

if (symbol == '/') {
    divide(num1, num2)
}
