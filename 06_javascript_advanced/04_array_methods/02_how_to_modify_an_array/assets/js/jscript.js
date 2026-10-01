'use strict';

const numbers = [0, 1, 2, 3, 4];

console.log(numbers);

// Adiciona novo elemento no final
numbers[numbers.length] = 99;

// Adiciona novo elemento no final
numbers.push(100, 101, 102);

// Adiciona novo elemento no incio
numbers.unshift(0.1, 0.2,);

// Remove Primeiro Elemento
numbers.shift();

// Remove Ultimo Elemento
const n = numbers.pop();

console.log(numbers);
console.log(n);

