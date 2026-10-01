'use strict';

const numbers = [1, 2, 3, 4, 5];

numbers.unshift = function() {
  const n = arguments.length;

  for (let i = this.length - 1; i >= 0; i--) {
    this[i + n] = this[i];
  }

  for (let i = 0; i < n; i++) {
    this[i] = arguments[i];
  }

  return this.length;
};

numbers.unshift(10, 11);
console.log(numbers);

