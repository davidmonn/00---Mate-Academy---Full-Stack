const numbers = [1, 2, 3, 4, 5]

const result = [
  ...numbers.slice(2, 3),
  100,
  200,
  300,
  ...numbers.slice(3)
];

numbers.push(999);

console.log(numbers);
console.log(result);
