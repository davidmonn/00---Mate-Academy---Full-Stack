const test = [2, 5];

function calculate(operands, operation) {
  const [a, b] = operands;

  return operation(a, b);
}

function sum(a, b) {
  return a + b;
}

function multy(a, b) {
  return a * b;
}


let teste = calculate(test, sum);
let testee = calculate(test, (a,b) => a - b);

console.log(teste);
console.log(testee);
