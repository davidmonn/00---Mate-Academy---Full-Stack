'use strict';

function calculate(operation, a, b) {
  // operation = #f_dd
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log(
  calculate(add, 6, 3),
  calculate(subtract, 6, 3),
  calculate(multiply, 6, 3),
  calculate((a, b) => a / b, 6, 3)
);

