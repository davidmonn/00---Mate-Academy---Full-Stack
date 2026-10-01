'use strict';

// Array
const numbers = new Array(1, 6, 3, 0, 5, 2, 4);

numbers.sort();

console.log(numbers);

// Cadeia de protótipos do Array:
// [] -> Array.prototype -> Object.prototype

// O array numbers herda de Array.prototype.
console.log(numbers.__proto__ === Array.prototype);


// Object
// {} -> Object.prototype

console.log({}.__proto__ === Object.prototype);


// Function
// () => {} -> Function.prototype -> Object.prototype

console.log((() => {}).__proto__ === Function.prototype);

// String
// Strings primitivas também podem usar métodos.
// O JavaScript cria temporariamente um objeto String
// para permitir o acesso aos métodos de String.prototype.
//
// 'qwerty'.includes('q')
// ↓
// objeto temporário de String
// ↓
// String.prototype
// ↓
// Object.prototype

console.log('dhauwdh'.includes('a'));

// Também podemos criar um objeto String manualmente,
// mas normalmente não precisamos fazer isso.
console.log(new String('dhauwdh').includes('a'));

