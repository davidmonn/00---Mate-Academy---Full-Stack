const numbs = [2, 5, 6];

function getResult(params, callback) {
  return callback(...params);
}

function sum(a, b, c) {
  return a + b + c;
}

const result = getResult(numbs, sum);
const arrow = getResult(numbs, (a, b, c) => a * b * c);

console.log(result);
console.log(arrow);
